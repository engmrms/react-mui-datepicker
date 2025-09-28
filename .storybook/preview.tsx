import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import React, { PropsWithChildren, useEffect } from 'react'
import { setLanguage, useLanguage } from '../src'
import StorybookFooter from '../src/Components/stories/footer'
import './style.css'
import '/src/Assets/css/Shared.css'

const customDocsPage = () => (
    <div className="flex flex-col" style={{ minHeight: '100%' }}>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />

        {/* Footer goes here */}
        <StorybookFooter />
    </div>
)

const LocaleWrapper = ({ children, locale }: PropsWithChildren<{ locale: 'ar' | 'en' }>) => {
    const { changeLang } = useLanguage()

    useEffect(() => {
        // Set the language when the locale changes
        changeLang(locale)
    }, [locale, changeLang])

    const dir = locale === 'ar' ? 'rtl' : 'ltr'

    return (
        <div dir={dir} className="bg-background-white">
            {children}
        </div>
    )
}

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
        docs: {
            page: customDocsPage,
        },
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
                brandImage: 'brand-dark.svg',
            },
            light: {
                ...themes.light,
                //...commonTheme,
                appBorderRadius: 14,
                brandImage: 'brand-light.svg',
                appBg: '#F7F7F7',
            },
        },
        options: {
            // storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
        },
    },
    decorators: [
        (Story, context) => {
            setLanguage(context.globals.locale)

            const StoryWithLocale = () => {
                return (
                    <LocaleWrapper locale={context.globals.locale}>
                        <Story />
                    </LocaleWrapper>
                )
            }

            return <StoryWithLocale />
        },
    ],
}

export default preview
