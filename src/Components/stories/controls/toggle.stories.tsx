/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { FormatBold, FormatItalic, FormatUnderlined } from 'google-material-icons/outlined'
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group'

const ToggleGroupDemo = (arg: any) => {
    return (
        <ToggleGroup type="multiple" {...arg}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <FormatBold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <FormatItalic />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                <FormatUnderlined />
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

const ToggleGroupDemoSingle = (arg: any) => {
    return (
        <ToggleGroup type="single" {...arg}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <FormatBold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <FormatItalic />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                <FormatUnderlined />
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

const ToggleGroupDemoText = (arg: any) => {
    return (
        <ToggleGroup type="single" {...arg}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <FormatBold /> Bold
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <FormatItalic /> Italic
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                <FormatUnderlined /> Underlined
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
const ToggleGroupResponsiveDemo = (arg: any) => {
    const toggleOptions = Array.from({ length: 10 }, (_, i) => ({
        value: `option${i + 1}`,
        label: `Option ${i + 1}`,
    }))
    return (
        <ToggleGroup type="single" {...arg}>
            {toggleOptions.map(togle => (
                <ToggleGroupItem key={togle.value} value={togle.value} aria-label="Toggle bold">
                    {togle.label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    )
}

const meta: Meta<typeof ToggleGroup> = {
    title: 'Design System/Controls/Toggle Group',
    component: ToggleGroup,
    tags: ['autodocs'],
    args: {
        disabled: false,
        asChild: false,
        variant: 'default',
        size: 'default',
        colors: 'default',
        dir: 'ltr',
        rounded: 'default',
    },
    argTypes: {
        // Appearance
        dir: {
            control: 'radio',
            options: ['rtl', 'ltr'],
            table: {
                category: 'Appearance',
                type: { summary: 'rtl | ltr' },
                defaultValue: { summary: 'ltr' },
            },
            description: 'The direction of the toggle group',
        },
        colors: {
            control: 'select',
            options: ['default', 'gray', 'oncolor'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | gray | oncolor' },
                defaultValue: { summary: 'default' },
            },
            description: 'The colors of the toggle group',
        },
        size: {
            control: 'select',
            options: ['icon', 'default', 'sm', 'xs', 'icon-sm', 'icon-xs', 'fit'],
            table: {
                category: 'Appearance',
                type: { summary: 'icon | default | sm | xs | icon-sm | icon-xs | fit' },
                defaultValue: { summary: 'default' },
            },
            description: 'The size of the toggle group',
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
            description: 'The rounded of the toggle group',
        },
        variant: {
            control: 'select',
            options: ['outline', 'default'],
            table: {
                category: 'Appearance',
                type: { summary: 'outline | default' },
                defaultValue: { summary: 'default' },
            },
            description: 'The variant of the toggle group',
        },

        // Behavior
        disabled: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The disabled state of the toggle group',
        },
        asChild: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The asChild state of the toggle group',
        },

        // Core Configuration
        value: {
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The value of the toggle group',
        },

        // Events
        onValueChange: {
            action: 'onValueChange',
            table: {
                category: 'Events',
                type: { summary: '(value: string) => void' },
            },
            description: 'The on value change event of the toggle group',
        },
    },

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>A set of two-state buttons that can be toggled on or off.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
    render: ToggleGroupDemo,
}
export const Single: Story = {
    args: {
        disabled: false,
        asChild: false,
        variant: 'outline',
        colors: 'default',
        size: 'icon',
        rounded: 'default',
    },
    render: ToggleGroupDemoSingle,
}

export const Text: Story = {
    args: {
        disabled: false,
        asChild: false,
        variant: 'outline',
        colors: 'default',
        size: 'default',
        rounded: 'default',
    },
    render: ToggleGroupDemoText,
}

export const Responsive: Story = {
    args: {
        disabled: false,
        asChild: false,
        variant: 'outline',
        colors: 'default',
        size: 'default',
        rounded: 'default',
    },
    render: ToggleGroupResponsiveDemo,
}
