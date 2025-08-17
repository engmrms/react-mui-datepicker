import type { Meta, StoryObj } from '@storybook/react'

import { PageLoader } from '../../../package'
const meta: Meta<typeof PageLoader> = {
    title: 'Design System/FeedBack/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>PageLoader covers the entire page and shows a loading indicator.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof PageLoader>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: () => {
        return (
            <>
                <div className="h-[400px]" id="loader"></div>
                createPortal(
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-white">
                    <PageLoader />
                </div>
                , loader! )
            </>
        )
    },
}
