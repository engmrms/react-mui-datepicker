/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Meta, StoryObj } from '@storybook/react'

import { Stack } from '../../ui/Layout'

const StackSample = (arg: any) => {
    return (
        <Stack {...arg}>
            <div className="bg-red-300 p-space-02">item 1</div>
            <div className="bg-red-300 p-space-02">item</div>
            <div className="bg-red-300 p-space-02">item</div>
            <div className="bg-red-300 p-space-02">item</div>
            <div className="bg-red-300 p-space-02">item</div>
            <div className="bg-red-300 p-space-02">item</div>
            <div className="bg-red-300 p-space-02">item</div>
            <div className="bg-red-300 p-space-02">item 8</div>
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
        gap: {
            options: ['none', 'small', 'medium', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'select' },
            description: 'also you can use gapX,gapY',
        },
        justifyItems: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
        },
        alignItems: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
        },
        alignContent: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
        },
        justifyContent: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
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
    args: {
        direction: 'row',
        gap: 4,
        justifyItems: 'start',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    argTypes: {
        justifyItems: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
        },
    },

    render: StackSample,
}
