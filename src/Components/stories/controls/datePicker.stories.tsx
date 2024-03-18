/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import DatePicker from '../../ui/DatePicker'
import { useState } from 'react'
import { Moment } from 'moment'

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
        rounded: 'default',
    },
    render: arg => {
        return <DatePickerDemo {...arg} />
    },
}

const DatePickerDemo = (arg: any) => {
    const [valu, setValu] = useState<Moment>()
    console.log(valu)
    return <DatePicker value={valu} onChange={v => { console.log(v); setValu(v)}} {...arg} />
}
