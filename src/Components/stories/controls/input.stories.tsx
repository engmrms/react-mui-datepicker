import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../../ui/input'

const meta: Meta<typeof Input> = {
    title: 'Design System/Controls/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        variant: 'outline',
        colors: 'default',
        rounded: 'default',
        disabled: false,
        size: 'default',
        placeholder: 'Enter text',
    },
    argTypes: {
        // Appearance
        variant: {
            control: 'select',
            options: ['default', 'outline', 'lighter'],
            description: 'The variant of the input',
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | lighter' },
                defaultValue: { summary: 'outline' },
            },
        },

        colors: {
            control: 'select',
            options: ['default', 'success', 'destructive'],
            description: 'The color of the input',
            table: {
                category: 'Appearance',
                type: { summary: 'default | success | destructive' },
                defaultValue: { summary: 'default' },
            },
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
            description: 'The rounded of the input',
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
        },

        size: {
            control: 'select',
            options: ['default', 'sm'],
            description: 'The size of the input',
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
        },
        placeholder: {
            control: 'text',
            description: 'The placeholder of the input',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Enter text' },
            },
        },
        startAdornment: {
            control: 'text',
            description: 'The start adornment of the input',
            table: {
                category: 'Appearance',
                type: { summary: 'string | ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
        },
        endAdornment: {
            control: 'text',
            description: 'The end adornment of the input',
            table: {
                category: 'Appearance',
                type: { summary: 'string | ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
        },

        // Behavior
        disabled: {
            control: 'boolean',
            description: 'The disabled state of the input',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },

        // Events
        onChange: {
            action: 'onChange',
            table: {
                category: 'Events',
                type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
            },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a form input field or a component that looks like an input field.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Input>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}
