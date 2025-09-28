/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/preview-api'
import { Rating } from '../../Rating'

const meta: Meta<typeof Rating> = {
    title: 'Design System/FeedBack/Rating',

    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        // Core Configuration
        className: {
            control: 'text',
            description: 'The class name of the rating',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'gap-1' },
            },
        },
        value: {
            control: 'number',
            description: 'The value of the rating',
            table: {
                category: 'Core Configuration',
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
        },
        readOnly: {
            control: 'boolean',
            description: 'The read only state of the rating',
            table: {
                category: 'Core Configuration',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        // Appearance
        max: {
            control: 'number',
            description: 'The max of the rating',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: '5' },
            },
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'xs'],
            description: 'The size of the rating',
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm | xs' },
                defaultValue: { summary: 'default' },
            },
        },
        variant: {
            control: 'select',
            options: ['default', 'brand'],
            description: 'The variant of the rating',
            table: {
                category: 'Appearance',
                type: { summary: 'default | brand' },
                defaultValue: { summary: 'default' },
            },
        },

        // Events
        onChange: {
            action: 'onChange',
            description: 'The onChange event of the rating',
            table: {
                category: 'Events',
                type: { summary: '(value: number) => void' },
            },
        },
    },
    args: {
        max: 5,
        value: 0,
        size: 'default',
        variant: 'default',
        readOnly: false,
        className: 'gap-1',
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4>Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
    args: {
        max: 5,
        value: 0,
        size: 'default',
        variant: 'default',
        readOnly: false,
        className: 'gap-1',
    },
    render: args => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [storyArgs, updateArgs] = useArgs()
        return (
            <Rating
                {...args}
                onChange={v => {
                    if (v !== storyArgs.value) {
                        updateArgs({ value: v })
                    }
                }}
            />
        )
    },
}
