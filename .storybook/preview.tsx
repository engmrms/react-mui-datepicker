import type { Preview } from '@storybook/react'
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
    },
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
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
            return (
                <div dir={context.globals.locale === 'ar' ? 'rtl' : 'ltr'}>
                    <Story />
                </div>
            )
        },
    ],
}

export default preview
