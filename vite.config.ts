import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import inject from '@rollup/plugin-inject'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import { join, resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export const hash = Math.floor(Math.random() * 90000) + 10000

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: false,
    build: {
        minify:"esbuild",
        lib: {
            entry: resolve(__dirname, join('src', 'package.ts')),
            formats: ['cjs', 'es'],
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
                preserveModules: true, // Enable tree-shaking
                preserveModulesRoot: 'src', // Preserve module structure
                //sourcemap: true,
            },
            plugins: [
                inject({
                    React: 'react',
                    exclude: 'src/**',
                }),
            ],

            external: ['react/jsx-runtime', 'react', 'react-dom', /^@radix-ui/, '@tanstack/react-query', 'framer-motion'],
        },
        commonjsOptions: { requireReturnsDefault: 'preferred' },
        assetsInlineLimit: 0,
    },
    esbuild: {
        legalComments: 'none',
        drop: ['console', 'debugger'],
    },

    plugins: [react(), basicSsl(), dts({ tsconfigPath: './tsconfig.json', rollupTypes: true })],

    server: {
        https: true,
        port: 3000,
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [esbuildCommonjs(['moment-hijri'])],
        },
        include: ['moment-hijri'],
    },
})
