import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // tetap di root Laravel
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/js/components/**/*.jsx',
                'resources/js/Pages/**/*.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        port: 8080,
        strictPort: true,
    },
    build: {
        manifest: true,
        outDir: 'public/build',
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(__dirname, 'resources/js/app.jsx'),
            output: {
                publicPath: '/build/',
            },
        },
    },
});
