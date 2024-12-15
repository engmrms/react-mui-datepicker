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
    args: {},
    argTypes: {},
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
