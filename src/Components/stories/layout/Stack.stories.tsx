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
    title: 'Design System/Layout/Stack',
    component: StackSample,
    tags: ['autodocs'],
    args: {
        direction: 'row',
    },
    argTypes: {
        direction: {
            options: ['row', 'row-reverse', 'col', 'col-reverse'],
            control: { type: 'select' },
            table: {
                category: 'Appearance',
                type: { summary: 'row | row-reverse | col | col-reverse' },
                defaultValue: { summary: 'row' },
            },
            description: 'The direction of the stack',
        },
        gap: {
            options: ['none', 'small', 'medium', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'select' },
            description: 'also you can use gapX,gapY',
            table: {
                category: 'Appearance',
                type: { summary: 'none | small | medium | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
                defaultValue: { summary: 'none' },
            },
        },
        justifyItems: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
            table: {
                category: 'Appearance',
                type: { summary: 'start | center | end | stretch' },
                defaultValue: { summary: 'stretch' },
            },
            description: 'The justifyItems of the stack',
        },
        alignItems: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
            table: {
                category: 'Appearance',
                type: { summary: 'start | center | end | stretch' },
                defaultValue: { summary: 'stretch' },
            },
            description: 'The alignItems of the stack',
        },
        alignContent: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
            table: {
                category: 'Appearance',
                type: { summary: 'start | center | end | between | around | evenly' },
                defaultValue: { summary: 'start' },
            },
            description: 'The alignContent of the stack',
        },
        justifyContent: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
            table: {
                category: 'Appearance',
                type: { summary: 'start | center | end | between | around | evenly' },
                defaultValue: { summary: 'start' },
            },
            description: 'The justifyContent of the stack',
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
