/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import { TimePicker } from '../../ui/TimePicker'
const meta: Meta<typeof TimePicker> = {
    title: 'Design System/Controls/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
    parameters: {
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
        placeholder: undefined,
        rounded: 'default',
        value: '',
        variant: 'default',
        colors: 'default',
        size: 'default',
        ampm: true,
        timeStep: 15,
    },
    argTypes: {
        value: { control: 'text' },
        ampm: { control: 'boolean' },
        lang: { control: { type: 'radio' }, options: ['en', 'ar'] },
        placeholder: { control: 'text' },
        timeStep: {
            control: { type: 'number', min: 1, max: 60, step: 1 },
            description: 'Minute interval for time options',
        },
        rounded: { control: 'text' },
        variant: { control: 'text' },
        colors: { control: 'text' },
        size: { control: 'text' },
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
