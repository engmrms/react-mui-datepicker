import type { Meta, StoryObj } from '@storybook/react'

import { Add } from 'google-material-icons/outlined'
import { FloatingButton } from '../../FloatingButton'

const meta: Meta<typeof FloatingButton> = {
    title: 'Design System/Controls/FloatingButton',
    component: FloatingButton,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">A button that floats at the bottom of the page.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof FloatingButton>

export const Default: Story = {
    args: {
        colors: 'primary',
        size: 'default',
        children: <Add />,
        asChild: false,
        disabled: false,
        position: 'bottomRight',
    },
    render: args => {
        return (
            <div className="h-space-11">
                <FloatingButton {...args} />
            </div>
        )
    },
}

export const WithText: Story = {
    args: {
        colors: 'primary',
        size: 'default',
        asChild: false,
        disabled: false,
        position: 'bottomRight',
    },
    render: args => {
        return (
            <div className="h-space-11">
                <FloatingButton {...args}>
                    <Add />
                    <span>Add</span>
                </FloatingButton>
            </div>
        )
    },
}
