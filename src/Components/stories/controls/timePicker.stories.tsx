/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import TimePicker from '../../ui/TimePicker'
const meta: Meta<typeof TimePicker> = {
    title: 'Design System/Controls/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
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
        lang: 'ar',
        placeholder: '',
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
    },
    render: arg => {
        const [storyArgs, updateArgs] = useArgs()
        return (
            <TimePicker
                {...arg}
                onChange={v => {
                    if (v !== storyArgs.value) {
                        updateArgs({ value: v })
                    }
                }}
            />
        )
    },
}
