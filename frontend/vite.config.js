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
        outDir: resolve(__dirname, '../backend/public/build'),
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: resolve(__dirname, 'resources/js/app.js'),
        },
    },
});

