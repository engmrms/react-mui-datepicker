/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Meta, StoryObj } from '@storybook/react'

import { Stack } from '../../ui/Layout'

const StackSample = (arg: any) => {
    return (
        <Stack {...arg}>
            <div className="bg-red-300">item 1</div>
            <div className="bg-red-300">item</div>
            <div className="bg-red-300">item</div>
            <div className="bg-red-300">item</div>
            <div className="bg-red-300">item</div>
            <div className="bg-red-300">item</div>
            <div className="bg-red-300">item</div>
            <div className="bg-red-300">item 8</div>
        </Stack>
    )
}
const meta: Meta<typeof Stack> = {
    title: 'Design System/layout/Stack',
    component: StackSample,
    tags: ['autodocs'],
    args: {
        direction: 'row',
    },
    argTypes: {
        direction: {
            options: ['row', 'row-reverse', 'col', 'col-reverse'],
            control: { type: 'inline-radio' },
        },
        spacing: {
            options: ['none', 'small', 'medium'],
            control: { type: 'inline-radio' },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a Stack</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Stack>
export const Default: Story = {
    render: StackSample,
}
