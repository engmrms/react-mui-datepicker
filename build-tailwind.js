/* eslint-disable @typescript-eslint/no-var-requires */
// packages/mada-design-system/scripts/build-tailwind.js
const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '.')

const distDir = path.join(rootDir, 'dist')

// Ensure dist directory exists
try {
    fs.mkdirSync(distDir, { recursive: true })
} catch (err) {
    // Directory may already exist
}

// Copy and transform Tailwind config
try {
    // Copy original ESM version
    fs.copyFileSync(path.join('tailwind.config.js'), path.join(distDir, 'tailwind.config.js'))
    fs.copyFileSync(path.join('tsconfig.json'), path.join(distDir, 'tsconfig.json'))
    fs.copyFileSync(path.join('.prettierrc.json'), path.join(distDir, '.prettierrc.json'))
    fs.copyFileSync(path.join('.eslintrc.cjs'), path.join(distDir, '.eslintrc.cjs'))

    // Read and transform to CJS
    const content = fs.readFileSync(path.join('tailwind.config.js'), 'utf-8')

    const cjsContent = `"use strict";
${content.replace('export default', 'module.exports =')}`

    fs.writeFileSync(path.join(distDir, 'tailwind.config.cjs'), cjsContent)

    console.log('✓ Tailwind configs built successfully')
} catch (err) {
    console.error('Error building Tailwind configs:', err)
    process.exit(1)
}
