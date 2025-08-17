import type { Meta, StoryObj } from '@storybook/react'

import { ActionLoader } from '../../../package'
const meta: Meta<typeof ActionLoader> = {
    title: 'Design System/FeedBack/ActionLoader',
    component: ActionLoader,
    tags: ['autodocs'],

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>ActionLoader shows a loading indicator while an action is in progress.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof ActionLoader>

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
                    <ActionLoader />
                </div>
                , loader! )
            </>
        )
    },
}
