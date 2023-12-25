import inject from '@rollup/plugin-inject'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
export const hash = Math.floor(Math.random() * 90000) + 10000

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `Assets/[name]${hash}.js`,
                chunkFileNames: `Assets/[name]${hash}.js`,
                assetFileNames: `Assets/[name]${hash}.[ext]`,
            },
            plugins: [
                inject({
                    React: 'react',
                    exclude: 'src/**',
                }),
            ],
        },
        commonjsOptions: { requireReturnsDefault: 'preferred' },
    },
    plugins: [react(), basicSsl()],

    server: {
        https: true,
        port: 5000,
    },
})
