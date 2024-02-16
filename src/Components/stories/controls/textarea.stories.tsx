import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '../../ui/textarea'

const meta: Meta<typeof Textarea> = {
    title: 'Design System/Controls/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: '<h4>Displays a form textarea or a component that looks like a textarea.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Textarea>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        variant: 'outline',
        colors: 'default',
        rounded: 'default',
        disabled: false,
    },
}
