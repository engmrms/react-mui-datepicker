import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, Renderer } from '@storybook/react'
import React from 'react'
import '/src/Assets/css/Shared.css'

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
        dir: {
            name: 'Text direction',
            description: 'Set the text direction for the story',
            defaultValue: 'ltr',
            toolbar: {
                icon: 'transfer',
                title: 'Text direction',
                items: [
                    {
                        right: '🔄',
                        title: 'auto',
                        value: 'auto',
                    },
                    {
                        right: '➡️',
                        title: 'left-to-right (ltr)',
                        value: 'ltr',
                    },
                    {
                        right: '⬅️',
                        title: 'right-to-left (rtl)',
                        value: 'rtl',
                    },
                ],
            },
        },
    },
    parameters: {
        // actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            // storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
        },
    },
    decorators: [
        (Story, context) => {
            console.log(context.globals)
            React.useEffect(() => {
                const html = document.documentElement
                if (context.globals.theme === 'dark') {
                    html.classList.add('dark')
                } else {
                    html.classList.remove('dark')
                }
            }, [context.globals.theme])
            return (
                <div dir={context.globals.dir} className="bg-background-white">
                    <Story />
                </div>
            )
        },
        withThemeByClassName<Renderer>({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
}

export default preview
