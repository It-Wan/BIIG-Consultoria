import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

// Plugin para garantir que a pasta public seja copiada
function copyPublicDir() {
    let copied = false;
    
    function doCopy() {
        if (!process.env.VERCEL || copied) return;
        
        const publicDir = resolve(__dirname, 'public');
        const outDir = resolve(__dirname, 'dist');
        
        if (!existsSync(publicDir)) {
            console.warn('[copy-public-dir] Pasta public não encontrada:', publicDir);
            return;
        }
        
        // Garantir que o diretório de saída existe
        if (!existsSync(outDir)) {
            mkdirSync(outDir, { recursive: true });
            console.log('[copy-public-dir] Diretório dist criado:', outDir);
        }
        
        function copyRecursive(src, dest) {
            const entries = readdirSync(src, { withFileTypes: true });
            
            for (const entry of entries) {
                const srcPath = join(src, entry.name);
                const destPath = join(dest, entry.name);
                
                if (entry.isDirectory()) {
                    if (!existsSync(destPath)) {
                        mkdirSync(destPath, { recursive: true });
                    }
                    copyRecursive(srcPath, destPath);
                } else {
                    // Copiar arquivo
                    copyFileSync(srcPath, destPath);
                }
            }
        }
        
        console.log('[copy-public-dir] Iniciando cópia de', publicDir, 'para', outDir);
        copyRecursive(publicDir, outDir);
        console.log('[copy-public-dir] Cópia concluída!');
        copied = true;
    }
    
    return {
        name: 'copy-public-dir',
        closeBundle() {
            // Copiar no final após o Vite ter copiado (ou como backup se não copiou)
            // closeBundle é executado após tudo estar pronto
            doCopy();
        },
    };
}

export default defineConfig({
    plugins: [
        vue({
            // Configurar para não transformar URLs de assets que começam com /
            // Isso evita que o Vite tente importar arquivos da pasta public como módulos
            template: {
                transformAssetUrls: {
                    // Desabilitar transformação para caminhos absolutos (que começam com /)
                    base: null,
                    // Manter transformação apenas para caminhos relativos
                    includeAbsolute: false,
                },
            },
        }),
        copyPublicDir(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
        // Garantir que caminhos absolutos começando com / não sejam tratados como imports
        dedupe: ['vue', 'vue-router'],
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
    },
    build: {
        // Para Vercel, usar 'dist', para backend Laravel usar '../backend/public/build'
        outDir: process.env.VERCEL ? 'dist' : resolve(__dirname, '../backend/public/build'),
        // O Vite copia public automaticamente após limpar, então habilitamos emptyOutDir
        // Nosso plugin garante cópia no final como backup
        emptyOutDir: true,
        manifest: !process.env.VERCEL, // Manifest só é necessário para Laravel
        // Otimizações para melhor performance
        minify: 'esbuild', // Mais rápido que terser e já vem com Vite
        rollupOptions: {
            input: process.env.VERCEL 
                ? resolve(__dirname, 'index.html')
                : resolve(__dirname, 'resources/js/app.js'),
            output: {
                // Code splitting para melhor cache
                manualChunks: {
                    'vendor': ['vue', 'vue-router'],
                },
            },
        },
        // Chunk size warnings
        chunkSizeWarningLimit: 1000,
        // Garantir que assets estáticos sejam copiados corretamente
        assetsInlineLimit: 4096,
        // Garantir que a pasta public seja copiada
        copyPublicDir: true,
    },
    // Otimizações de CSS
    css: {
        devSourcemap: false,
    },
    // Configuração para copiar assets públicos
    publicDir: 'public',
    // Garantir que o Vite trate corretamente arquivos estáticos
    assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.mp4'],
});

