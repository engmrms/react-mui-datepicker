/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'

import DatePicker from '../../ui/DatePicker'
const meta: Meta<typeof DatePicker> = {
    title: 'Design System/Controls/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
}

export default meta

// /**
//  * ##### This react date picke component let users select date values.
//  */
type Story = StoryObj<typeof DatePicker>

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
    },
    argTypes: {
        value: { control: 'text' },
    },
    render: arg => {
        const [storyArgs, updateArgs] = useArgs()
        return (
            <DatePicker
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
