import type { Meta, StoryObj } from '@storybook/react'

import { School } from 'google-material-icons/outlined'
import { Button } from '../../ui/button'

const meta: Meta<typeof Button> = {
    title: 'Design System/Controls/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // Appearance
        variant: {
            control: 'select',
            options: ['default', 'outline', 'ghost', 'link', 'text'],
            defaultValue: 'default',
            description: 'The variant of the button',
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | ghost | link | text' },
                defaultValue: { summary: 'default' },
            },
        },
        colors: {
            control: 'select',
            options: ['primary', 'error', 'neutral', 'oncolor', 'secondary', 'tertiary', 'warning', 'success', 'info', 'gray'],
            defaultValue: 'primary',
            description: 'The color of the button (primary, error, neutral, oncolor, secondary, tertiary, warning, success, info, gray)',
            table: {
                category: 'Appearance',
                type: { summary: 'primary | error | neutral | oncolor | secondary | tertiary | warning | success | info | gray' },
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'xs'],
            defaultValue: 'default',
            description: 'The size of the button (default, sm, xs)',
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm | xs' },
                defaultValue: { summary: 'default' },
            },
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
            defaultValue: 'default',
            description: 'The roundness of the button (default, full)',
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
        },

        // Behavior
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'The disabled state of the button',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        tooltip: {
            control: 'text',
            defaultValue: 'Tooltip',
            description: 'The tooltip of the button',
            table: {
                category: 'Behavior',
                type: { summary: 'string' },
                defaultValue: { summary: 'Tooltip' },
            },
        },
        asChild: {
            control: 'boolean',
            defaultValue: false,
            description: 'The asChild state of the button',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        isLoading: {
            control: 'boolean',
            defaultValue: false,
            description: 'The loading state of the button',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        children: {
            control: 'text',
            defaultValue: 'Button',
            description: 'The children of the button',
            table: {
                category: 'Behavior',
                type: { summary: 'string' },
                defaultValue: { summary: 'Button' },
            },
        },
    },
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'default',
        rounded: 'default',
        children: 'Button',
        asChild: false,
        disabled: false,
        isLoading: false,
        tooltip: '',
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">Displays a button or a component that looks like a button.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

// /**
//  * # The Button component
//  * Shows a button
//  */
export const Default: Story = {}

export const ButtonWithIcon: Story = {
    render: args => (
        <Button {...args}>
            <School /> {args.children}
        </Button>
    ),
}
