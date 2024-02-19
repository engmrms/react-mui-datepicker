import type { Meta, StoryObj } from '@storybook/react'

import DatePicker from '../../ui/DatePicker'

const meta: Meta<typeof DatePicker> = {
    title: 'Design System/Controls/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {},
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
        value: new Date().toLocaleString(),
    },
    render: arg => {
        return <DatePicker {...arg} />
    },
}
