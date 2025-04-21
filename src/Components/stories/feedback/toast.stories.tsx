/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { useToast } from '../../ui/use-toast'

import { Button } from '../../ui/button'
import { Toast, ToastAction } from '../../ui/toast'
import { Toaster } from '../../ui/toaster'

const meta: Meta<typeof Toast> = {
    title: 'Design System/FeedBack/Toast',
    component: Toast,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'destructive', 'success', 'info', 'warning'] },
        position: { control: 'select', options: ['top', 'bottom', 'top-right', 'top-left', 'bottom-right', 'bottom-left'] },
    },

    decorators: [
        (Story, context) => (
            <div className="min-h-space-12">
                <Toaster position={context.args.position} />
                <Story />
            </div>
        ),
    ],
    parameters: {
        docs: {
            description: {
                component: '<h4>A succinct message that is displayed temporarily.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Toast>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
    args: {
        variant: 'default',
        position: 'top',
    },
    render: arg => {
        const { toast } = useToast()
        return (
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: 'Scheduled: Catch up',
                        description: 'Friday, February 10, 2023 at 5:57 PM',
                        ...arg,
                    })
                }}>
                Show Toast
            </Button>
        )
    },
}

export const WithAction: Story = {
    args: {
        variant: 'default',
    },
    render: arg => {
        const { toast } = useToast()
        return (
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: 'Scheduled: Catch up',
                        description: 'Friday, February 10, 2023 at 5:57 PM',
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                        ...arg,
                    })
                }}>
                Show Toast
            </Button>
        )
    },
}

export const WithoutTitle: Story = {
    args: {
        variant: 'default',
    },
    render: arg => {
        const { toast } = useToast()
        return (
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        description: 'Friday, February 10, 2023 at 5:57 PM',
                        ...arg,
                    })
                }}>
                Show Toast
            </Button>
        )
    },
}
