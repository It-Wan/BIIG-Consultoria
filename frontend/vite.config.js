import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
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
    },
    // Otimizações de CSS
    css: {
        devSourcemap: false,
    },
    // Configuração para copiar assets públicos
    publicDir: 'public',
});

