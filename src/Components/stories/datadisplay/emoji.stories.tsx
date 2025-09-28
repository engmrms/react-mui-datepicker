/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import Emoji from '../../ui/Emoji'

const meta: Meta<typeof Emoji> = {
    title: 'Design System/Data Display/Emoji',
    component: Emoji,
    tags: ['autodocs'],
    args: {
        variant: 'awful',
        disabled: false,
        size: 'default',
    },
    argTypes: {
        // Appearance
        variant: {
            control: 'select',
            options: ['awful', 'bad', 'ok', 'good', 'great'],
            table: {
                category: 'Appearance',
                type: { summary: 'awful | bad | ok | good | great' },
                defaultValue: { summary: 'awful' },
            },
            description: 'The variant of the emoji',
        },
        disabled: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The disabled state of the emoji',
        },
        size: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>An Emoji with five varaints.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Emoji>

export const Default: Story = {
    render: args => <Emoji {...args} />,
}
