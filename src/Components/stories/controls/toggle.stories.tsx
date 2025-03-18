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
    argTypes: {
        dir: { control: 'radio', options: ['rtl', 'ltr'] },
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
    args: {
        disabled: false,
        asChild: false,
        variant: 'outline',
        size: 'icon',
        colors: 'default',
        dir: 'ltr',
        rounded: 'default',
    },
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
