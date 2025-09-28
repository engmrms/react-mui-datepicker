/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import Heading from '../../Heading'

const meta: Meta<typeof Heading> = {
    component: Heading,
    title: 'Design System/Data Display/Heading',
    tags: ['autodocs'],
    args: {
        children: 'this is text sample',
        as: 'h1',
    },
    argTypes: {
        // Appearance
        as: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            description: 'h1 | h2 | h3 | h4 | h5 | h6',
            table: {
                category: 'Appearance',
                type: { summary: 'h1 | h2 | h3 | h4 | h5 | h6' },
                defaultValue: { summary: 'h1' },
            },
        },
        children: {
            control: 'text',
            description: 'The children of the heading',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'this is text sample' },
            },
        },
        asChild: {
            table: { disable: true },
        },
    },
    parameters: {
        layout: 'centered',
        options: {
            hidden: true,
        },
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
    render: arg => <Heading {...arg} />,
}
