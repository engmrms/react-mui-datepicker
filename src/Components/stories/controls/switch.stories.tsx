import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../../ui/label'
import { Switch } from '../../ui/switch'

const meta: Meta<typeof Switch> = {
    title: 'Design System/Controls/Switch',
    component: Switch,
    tags: ['autodocs'],
    args: {
        disabled: false,
        asChild: false,
        checked: false,
    },

    argTypes: {
        // Behavior
        disabled: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The disabled state of the switch',
        },
        asChild: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The asChild state of the switch',
        },

        // Appearance
        checked: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'checked' },
            },
            description: 'The checked state of the switch',
        },

        // Events
        onCheckedChange: {
            action: 'onCheckedChange',
            table: {
                category: 'Events',
                type: { summary: '(checked: boolean) => void' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The on checked change event of the switch',
        },

        // Core Configuration
        className: {
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The class name of the switch',
        },
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
type Story = StoryObj<typeof Switch>
export const Default: Story = {
    args: {
        disabled: false,
        asChild: false,
    },
    render: (arg, { globals: { dir } }) => {
        return (
            <div className="flex items-center gap-x-space-02 ">
                <Switch id="airplane-mode" {...arg} dir={dir} />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
        )
    },
}
