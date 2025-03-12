/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import Emoji from '../../ui/Emoji'

const meta: Meta<typeof Emoji> = {
    title: 'Design System/Data Display/Emoji',
    component: Emoji,
    tags: ['autodocs'],
    // argTypes: {
    //     size: { },
    // },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>An Emoji with five varaints.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Emoji>

export const Default: Story = {
    args: {
        variant:"awful",
        disabled: false,
        size:"default"
    },
    render: (args)=> <Emoji {...args}/>,
}
