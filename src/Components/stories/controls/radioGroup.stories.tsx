import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../../ui/label'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'

const meta: Meta<typeof RadioGroup> = {
    title: 'Design System/Controls/Radio Group',
    component: RadioGroup,
    tags: ['autodocs'],
    args: {
        asChild: false,
        colors: 'primary',
        size: 'default',
        dir: 'ltr',
        disabled: false,
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
            description: 'The direction of the radio group',
        },
        colors: {
            control: 'select',
            options: ['primary', 'neutral'],
            table: {
                category: 'Appearance',
                type: { summary: 'primary | neutral' },
                defaultValue: { summary: 'primary' },
            },
            description: 'The colors of the radio group',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'xs'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm | xs' },
                defaultValue: { summary: 'default' },
            },
            description: 'The size of the radio group',
        },

        // Behavior
        disabled: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The disabled state of the radio group',
        },
        asChild: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The asChild state of the radio group',
        },

        // Events
        onValueChange: {
            action: 'onValueChange',
            table: {
                category: 'Events',
                type: { summary: '(value: string) => void' },
            },
            description: 'The on value change event of the radio group',
        },

        // Core Configuration
        value: {
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
            },
            description: 'The value of the radio group',
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    '<h4>A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof RadioGroup>
export const Default: Story = {
    render: (arg, { globals: { dir } }) => {
        //const { dir } = useLanguage()

        return (
            <RadioGroup defaultValue="comfortable" {...arg} dir={dir}>
                <div className="flex items-center gap-x-space-02">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-x-space-02 ">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-x-space-02 ">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                </div>
            </RadioGroup>
        )
    },
}
