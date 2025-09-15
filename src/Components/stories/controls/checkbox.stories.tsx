/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../../ui/checkbox'

type CheckboxType = typeof Checkbox

const meta: Meta<CheckboxType> = {
    title: 'Design System/Controls/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        // Behavior
        asChild: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },

        // Appearance
        colors: {
            control: 'select',
            options: ['primary', 'neutral'],
            table: {
                category: 'Appearance',
                type: { summary: 'primary | neutral' },
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'xs'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm | xs' },
                defaultValue: { summary: 'default' },
            },
        },
        checked: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean | indeterminate' },
                defaultValue: { summary: 'checked' },
            },
            description: 'The checked state of the checkbox',
        },

        // Events
        onCheckedChange: {
            action: 'onCheckedChange',
            table: {
                category: 'Events',
                type: { summary: '(checked: CheckedState) => void' },
            },
            description: 'The on checked change event of the checkbox',
        },

        // Core Configuration
        className: {
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The class name of the checkbox',
        },
    },
    args: {
        asChild: false,
        disabled: false,
        colors: 'primary',
        size: 'default',
        checked: 'indeterminate',
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>A control that allows the user to toggle between checked and not checked.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<CheckboxType>

export const Default: Story = {
    render: (arg, { globals: { dir } }) => {
        return (
            <div className="flex items-center gap-space-01">
                <Checkbox {...arg} id="terms" dir={dir} />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Accept terms and conditions
                </label>
            </div>
        )
    },
}

export const Indeterminate: Story = {
    render: (arg, { globals: { dir } }) => {
        return (
            <div className="flex items-center gap-space-01">
                <Checkbox {...arg} id="terms" dir={dir} checked={'indeterminate'} />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Accept terms and conditions
                </label>
            </div>
        )
    },
}
