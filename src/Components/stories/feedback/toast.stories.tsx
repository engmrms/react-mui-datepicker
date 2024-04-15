/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { ToasterToast, useToast } from '../../ui/use-toast'

import { Button } from '../../ui/button'
import { Toast, ToastAction } from '../../ui/toast'
import { Toaster } from '../../ui/toaster'

const meta: Meta<typeof Toast & ToasterToast> = {
    title: 'Design System/FeedBack/Toast',
    component: Toast,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        Story => (
            <div className="min-h-space-12">
                <Toaster />
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
type Story = StoryObj<ToasterToast>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const args = {
    asChild: false,
    showClose: true,
}

export const Default: Story = {
    args,
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
    args,
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
    args,
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
