/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Meta, StoryObj } from '@storybook/react'

import { SimpleGrid } from '../../ui/Layout'

const SimpleGridTemplate = (arg: any) => {
    return (
        <div className="w-[50vw]">
            <SimpleGrid {...arg}>
                <div className="bg-red-300 p-space-02">item 1</div>
                <div className="bg-red-300 p-space-02">item</div>
                <div className="bg-red-300 p-space-02">item</div>
                <div className="bg-red-300 p-space-02">item</div>
                <div className="bg-red-300 p-space-02">item</div>
                <div className="bg-red-300 p-space-02">item 8</div>
            </SimpleGrid>
        </div>
    )
}
const meta: Meta<typeof SimpleGrid> = {
    title: 'Design System/Layout/SimpleGrid',
    component: SimpleGridTemplate,
    tags: ['autodocs'],

    argTypes: {
        cols: {
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'select' },
            table: {
                category: 'Appearance',
                type: { summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
                defaultValue: { summary: '3' },
            },
            description: 'The cols of the simple grid',
        },
        minChildWidth: {
            control: { type: 'text' },
            table: {
                category: 'Appearance',
                type: { summary: '100px | 10rem | string' },
                defaultValue: { summary: '100px' },
            },
            description: 'The minChildWidth of the simple grid',
        },
        gap: {
            options: ['none', 'small', 'medium', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'select' },
            table: {
                category: 'Appearance',
                type: { summary: 'none | small | medium | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
                defaultValue: { summary: 'none' },
            },
            description: 'The gap of the simple grid',
        },
        gapX: {
            options: ['none', 'small', 'medium', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'select' },
            table: {
                category: 'Appearance',
                type: { summary: 'none | small | medium | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
                defaultValue: { summary: 'none' },
            },
            description: 'The gapX of the simple grid',
        },
        gapY: {
            options: ['none', 'small', 'medium', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'select' },
            table: {
                category: 'Appearance',
                type: { summary: 'none | small | medium | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
                defaultValue: { summary: 'none' },
            },
            description: 'The gapY of the simple grid',
        },
    },
    args: {
        cols: 3,
        minChildWidth: '100px',
        gap: 'none',
        gapX: 'none',
        gapY: 'none',
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
type Story = StoryObj<typeof SimpleGrid>
export const Default: Story = {
    render: SimpleGridTemplate,
    args: {
        cols: 3,
    },
}
export const Responsive: Story = {
    render: SimpleGridTemplate,
    args: { minChildWidth: 100 },
}
