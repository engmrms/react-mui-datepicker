/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import Text from '../../Text'

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'Design System/Data Display/Text',
    tags: ['autodocs'],
    args: {
        children: 'this is text sample',
        as: 'span',
    },
    argTypes: {
        as: {
            control: 'select',
            options: ['span', 'label', 'p'],
            description: 'span | label | p',
            table: {
                category: 'Appearance',
                type: { summary: 'span | label | p' },
                defaultValue: { summary: 'span' },
            },
        },
        children: {
            control: 'text',
            description: 'The children of the text',
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
    args: {
        children: 'this is text sample',
        as: 'span',
    },
    argTypes: {
        as: {
            control: 'select',
            options: ['span', 'label', 'p'],
            description: 'span | label | p',
        },
    },

    render: arg => <Text {...arg}> the text sample </Text>,
}
