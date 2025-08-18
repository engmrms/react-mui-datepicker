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
