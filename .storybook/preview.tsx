import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import React from 'react'
import '/src/Assets/css/Shared.css'
import './style.css'
import { themes } from '@storybook/theming'
const preview: Preview = {
    globalTypes: {
        locale: {
            description: 'Global Layout Lang for components',
            defaultValue: 'en',
            toolbar: {
                // The label to show for this toolbar item
                title: 'Lang',
                icon: 'globe',
                // Array of plain string values or MenuItem shape (see below)
                items: [
                    { value: 'en', right: '🇺🇸', title: 'English' },
                    { value: 'ar', right: '🇸🇦', title: 'Arabic' },
                ],
                // Change title based on selected value
                dynamicTitle: true,
            },
        },
        // dir: {
        //     name: 'Text direction',
        //     description: 'Set the text direction for the story',
        //     defaultValue: 'ltr',
        //     toolbar: {
        //         icon: 'transfer',
        //         title: 'Text direction',
        //         items: [
        //             {
        //                 right: '🔄',
        //                 title: 'auto',
        //                 value: 'auto',
        //             },
        //             {
        //                 right: '➡️',
        //                 title: 'left-to-right (ltr)',
        //                 value: 'ltr',
        //             },
        //             {
        //                 right: '⬅️',
        //                 title: 'right-to-left (rtl)',
        //                 value: 'rtl',
        //             },
        //         ],
        //     },
        // },
    },
    parameters: {
        // actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        darkMode: {
            current: 'light',
            stylePreview: true,
            darkClass: 'dark',
            lightClass: 'light',
            classTarget: 'html',
            dark: {
                ...themes.dark,
                //   ...commonTheme,
                appBg: '#161616',
                barBg: 'black',
                background: 'black',
                appContentBg: 'black',
                appBorderRadius: 14,
                //   brandImage: "/dark-logo.svg",
            },
            light: {
                ...themes.light,
                //...commonTheme,
                appBorderRadius: 14,
                //  brandImage: "/light-logo.svg",
            },
        },
        options: {
            
            // storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
        },
    },
    decorators: [
        (Story, context) => {
            // React.useEffect(() => {
            //     const html = document.documentElement
            //     if (context.globals.theme === 'dark') {
            //         html.classList.add('dark')
            //     } else {
            //         html.classList.remove('dark')
            //     }
            // }, [context.globals.theme])

            const dir = context.globals.locale === 'ar' ? 'rtl' : 'ltr'
            return (
                <div dir={dir} className="bg-background-white">
                    <Story />
                </div>
            )
        },
        // withThemeByClassName({
        //     themes: {
        //         light: 'light',
        //         dark: 'dark',
        //     },
        //     defaultTheme: 'light',
        // }),
    ],
}

export default preview
