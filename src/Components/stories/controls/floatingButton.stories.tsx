import type { Meta, StoryObj } from '@storybook/react'

import { Add } from 'google-material-icons/outlined'
import { FloatingButton } from '../../FloatingButton'

const meta: Meta<typeof FloatingButton> = {
    title: 'Design System/Controls/FloatingButton',
    component: FloatingButton,
    tags: ['autodocs'],
    args: {
        colors: 'primary',
        size: 'default',
        children: <Add />,
        asChild: false,
        disabled: false,
        position: 'bottomRight',
    },
    argTypes: {
        // Appearance
        colors: {
            control: 'select',
            options: ['primary', 'neutral', 'oncolor'],
            description: 'The color of the floating button',
            table: {
                category: 'Appearance',
                type: { summary: 'primary | neutral | oncolor ' },
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: ['default', 'sm'],
            description: 'The size of the floating button',
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
        },

        // Behavior
        asChild: {
            control: 'boolean',
            options: [true, false],
            description: 'The asChild state of the floating button',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: 'boolean',
            options: [true, false],
            description: 'The disabled state of the floating button',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        position: {
            control: 'select',
            options: ['bottomRight', 'bottomLeft'],
            description: 'The position of the floating button',
            table: {
                category: 'Behavior',
                type: { summary: 'bottomRight | bottomLeft' },
                defaultValue: { summary: 'bottomRight' },
            },
        },
        children: {
            description: 'The content of the floating button',
            table: {
                category: 'Behavior',
                type: { summary: ' ReactNode' },
            },
        },
    },
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
