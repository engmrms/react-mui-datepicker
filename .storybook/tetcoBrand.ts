import { create } from '@storybook/theming/create'

export default create({
    base: 'light',

    fontBase: '"IBM Reguler","Open Sans", sans-serif',
    fontCode: '"IBM Reguler"',

    brandTitle: 'Tetco Design System',
    brandUrl: 'https://tetco.sa',
    brandImage: 'tetcologo.svg',
    brandTarget: '_self',
    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#F7F7F7',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#0F0F0F',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#353B3A',
    inputTextColor: '#0F0F0F',
    inputBorderRadius: 24,
})
