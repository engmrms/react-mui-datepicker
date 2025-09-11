/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import { TimePicker, TimePickerProps } from '../../ui/TimePicker'
const meta: Meta<TimePickerProps> = {
    title: 'Design System/Controls/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">Displays a time picker.</h4>`,
            },
        },
    },
}

export default meta

// /**
//  * ##### This react time picke component let users select time values.
//  */
type Story = StoryObj<typeof TimePicker>

// /**
//  * # The Button component
//  * Shows a button
//  */
export const Default: Story = {
    args: {
        lang: 'en',
        placeholder: '12:00',
        rounded: 'default',
        value: '',
        variant: 'default',
        colors: 'default',
        size: 'default',
        ampm: true,
        timeStep: 15,
    },
    argTypes: {
        // Core Configuration
        value: {
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            description: 'The selected time value in "HH:mm" format.',
        },
        timeStep: {
            control: { type: 'number', min: 1, max: 60, step: 1 },
            table: {
                category: 'Core Configuration',
                type: { summary: 'number' },
                defaultValue: { summary: '15' },
            },
            description: 'Minute interval for time options',
        },

        // Appearance
        placeholder: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: '12:00' },
            },
            description: 'Placeholder text for the time picker input.',
        },
        rounded: {
            control: { type: 'select' },
            options: ['default', 'full'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
            description: 'Border radius of the input field.',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outline', 'lighter'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | lighter' },
                defaultValue: { summary: 'default' },
            },
            description: 'Visual style variant of the input field.',
        },
        colors: {
            control: { type: 'select' },
            options: ['default', 'success', 'destructive'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | success | destructive' },
                defaultValue: { summary: 'default' },
            },
            description: 'Color scheme for the time picker.',
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'sm'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
            description: 'Size of the time picker input and dropdown.',
        },

        // Behavior
        disabled: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'Disables the time picker input and menu.',
        },
        ampm: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
            description: 'Whether to use 12-hour format with AM/PM selector.',
        },
        lang: {
            control: { type: 'radio' },
            options: ['en', 'ar'],
            table: {
                category: 'Behavior',
                type: { summary: 'en | ar' },
                defaultValue: { summary: 'en' },
            },
            description: 'Language for the time picker (en for English, ar for Arabic).',
        },

        // Events
        onChange: {
            action: 'onChange',
            table: {
                category: 'Events',
                type: { summary: '(time: string) => void' },
            },
            description: 'Fires when a time is selected; provides a string time value.',
        },
    },
    render: arg => {
        const safeArg = arg ?? Default.args
        const [storyArgs, updateArgs] = useArgs()
        return (
            <TimePicker
                {...safeArg}
                value={typeof safeArg.value === 'string' ? safeArg.value : ''}
                onChange={(v: string | null | undefined) => {
                    if (v !== storyArgs.value) {
                        updateArgs({ value: v })
                    }
                }}
            />
        )
    },
}

export const Sizes: Story = {
    args: {
        ...Default.args,
        size: 'sm',
    },
    parameters: {
        docs: {
            description: {
                story: 'Small size time picker.',
            },
        },
    },
}

export const Colors: Story = {
    args: {
        ...Default.args,
        colors: 'success',
    },
    parameters: {
        docs: {
            description: {
                story: 'Time picker with success color.',
            },
        },
    },
}

export const Variants: Story = {
    args: {
        ...Default.args,
        variant: 'outline',
    },
    parameters: {
        docs: {
            description: {
                story: 'Time picker with outline variant.',
            },
        },
    },
}

export const Rounded: Story = {
    args: {
        ...Default.args,
        rounded: 'full',
    },
    parameters: {
        docs: {
            description: {
                story: 'Time picker with fully rounded corners.',
            },
        },
    },
}

export const AmPm: Story = {
    args: {
        ...Default.args,
        ampm: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Time picker with 24-hour format (no AM/PM).',
            },
        },
    },
}

export const RTL: Story = {
    args: {
        ...Default.args,
        lang: 'ar',
    },
    parameters: {
        docs: {
            description: {
                story: 'Time picker in RTL (Arabic) mode.',
            },
        },
    },
}
