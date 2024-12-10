/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import Text from '../../ui/Text'

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'Design System/Data Display/Text',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>An Text element with a fallback for representing the user.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: arg => <Text {...arg}> the text sample </Text>,
}
