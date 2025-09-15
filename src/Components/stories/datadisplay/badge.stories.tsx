import type { Meta, StoryObj } from '@storybook/react'

import { Badge, BadgeProps } from '../../ui/badge'

function BadgDemo(arg: BadgeProps) {
    return <Badge {...arg}>badge</Badge>
}
const meta: Meta<BadgeProps> = {
    title: 'Design System/Data Display/Badge',
    component: Badge,
    tags: ['autodocs'],
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'default',
        rounded: 'default',
    },
    argTypes: {
        // Appearance
        variant: {
            description: 'The variant of the badge',
            control: 'select',
            options: ['default', 'ghost', 'outline'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | ghost | outline' },
                defaultValue: { summary: 'default' },
            },
        },
        colors: {
            description: 'The colors of the badge',
            control: 'select',
            options: ['primary', 'info', 'error', 'warning', 'gray', 'success'],
            table: {
                category: 'Appearance',
                type: { summary: 'primary | info | error | warning | gray | success' },
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            description: 'The size of the badge',
            control: 'select',
            options: ['default', 'sm', 'xs'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm | xs' },
                defaultValue: { summary: 'default' },
            },
        },
        rounded: {
            description: 'The rounded of the badge',
            control: 'select',
            options: ['default', 'full'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
        },
        disabled: {
            table: { disable: true },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a badge or a component that looks like a badge.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<BadgeProps>
export const Default: Story = {
    render: BadgDemo,
}
