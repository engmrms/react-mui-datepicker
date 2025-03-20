/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/preview-api'
import { Rating } from '../../Rating'

const meta: Meta<typeof Rating> = {
    title: 'Design System/FeedBack/Rating',

    component: Rating,
    tags: ['autodocs'],
    argTypes: {},
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
