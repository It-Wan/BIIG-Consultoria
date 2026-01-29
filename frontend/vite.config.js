import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
        // Plugin para garantir que caminhos absolutos da pasta public não sejam tratados como imports
        {
            name: 'ignore-public-assets',
            resolveId(id) {
                // Se o ID começa com /img/ ou /videos/, retornar null para que o Vite não tente resolver como módulo
                // O Vite automaticamente copia arquivos da pasta public, então não precisamos processá-los
                if (id.startsWith('/img/') || id.startsWith('/videos/')) {
                    // Retornar um ID falso que o Vite não tentará resolver
                    return '\0' + id;
                }
                return null;
            },
            load(id) {
                // Se for um ID que marcamos, retornar string vazia
                if (id.startsWith('\0/img/') || id.startsWith('\0/videos/')) {
                    return '';
                }
                return null;
            },
        },
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

