/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { FormatBold, FormatItalic, FormatUnderlined } from 'google-material-icons/outlined'
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group'

const ToggleGroupDemo = (arg: any) => {
    return (
        <ToggleGroup type="multiple" {...arg}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <FormatBold className="h-space-05 w-space-05" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <FormatItalic className="h-space-05 w-space-05" />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                <FormatUnderlined className="h-space-05 w-space-05" />
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

const ToggleGroupDemoSingle = (arg: any) => {
    return (
        <ToggleGroup type="single" {...arg}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <FormatBold className="h-space-05 w-space-05" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <FormatItalic className="h-space-05 w-space-05" />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                <FormatUnderlined className="h-space-05 w-space-05" />
            </ToggleGroupItem>
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
        variant: 'default',
        size: 'default',
        dir: 'ltr',
    },
    render: ToggleGroupDemo,
}
export const Single: Story = {
    args: {
        disabled: false,
        asChild: false,
        variant: 'default',
        size: 'default',
    },
    render: ToggleGroupDemoSingle,
}
