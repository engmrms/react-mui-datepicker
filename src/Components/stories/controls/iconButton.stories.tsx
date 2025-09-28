import type { Meta, StoryObj } from '@storybook/react'
import { Accessibility } from 'google-material-icons/outlined'

import { Button } from '../../ui/button'

const meta: Meta<typeof Button> = {
    title: 'Design System/Controls/Icon Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'icon',
        rounded: 'default',
        asChild: false,
        disabled: false,
        tooltip: 'set an Accessibility',
    },
    argTypes: {
        // Appearance
        variant: {
            control: 'select',
            options: ['default', 'outline', 'ghost', 'link', 'text'],
            description: 'The variant of the icon button',
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | ghost | link | text' },
                defaultValue: { summary: 'default' },
            },
        },
        size: {
            control: 'select',
            options: ['icon', 'icon-sm', 'icon-xs'],
            description: 'for icon button use only: icon, icon-sm,icon-xs',
            table: {
                category: 'Appearance',
                type: { summary: 'icon | icon-sm | icon-xs' },
                defaultValue: { summary: 'icon' },
            },
        },

        colors: {
            control: 'select',
            options: ['primary', 'neutral', 'oncolor'],
            description: 'The color of the icon button',
            table: {
                category: 'Appearance',
                type: { summary: 'primary | neutral | oncolor' },
                defaultValue: { summary: 'primary' },
            },
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
            description: 'The rounded of the icon button',
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
        },
        // Behavior
        asChild: {
            control: 'boolean',
            description: 'The asChild state of the icon button',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'The disabled state of the icon button',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        tooltip: {
            control: 'text',
            description: 'The tooltip of the icon button',
            table: {
                category: 'Behavior',
                type: { summary: 'string' },
                defaultValue: { summary: 'Tooltip' },
                description: 'The tooltip of the icon button',
            },
        },

        children: {
            description: 'The content of the icon button',
            table: {
                category: 'Behavior',
            },
        },
        isLoading: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">Displays a icon button or a component that looks like a button.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

// /**
//  * # The Icon Button component
//  * Shows a button
//  */
export const Default: Story = {
    render: args => (
        <Button {...args}>
            <Accessibility />
        </Button>
    ),
}
