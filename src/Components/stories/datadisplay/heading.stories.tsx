/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import Heading from '../../ui/Heading'

const meta: Meta<typeof Heading> = {
    component: Heading,
    title: 'Design System/Data Display/Heading',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>A flexible typography component for displaying headings with different sizes and styles.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'this is text sample',
        as: 'h1',
    },
    argTypes: {
        as: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            description: ' h1 | h2 | h3 | h4 | h5 | h6',
        },
    },

    render: arg => <Heading {...arg} />,
}
