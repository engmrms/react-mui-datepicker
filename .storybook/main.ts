import type { StorybookConfig } from '@storybook/react-vite'

const excludedPropNames = ['null']

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    typescript: {
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: true,
                esModuleInterop: true,
            },
            propFilter: (prop, component) => {
                const isExcludedProp = excludedPropNames.includes(prop.name)
                const isHTMLElementProp = (prop.parent && prop.parent.fileName.includes('node_modules/@types/react/')) || false

                return !(isExcludedProp || isHTMLElementProp)
            },
        },
    },
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'Documentation',
    },
    staticDirs: ['../public'],
}
export default config
