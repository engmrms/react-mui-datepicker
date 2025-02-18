import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../../ui/input'

const meta: Meta<typeof Input> = {
    title: 'Design System/Controls/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a form input field or a component that looks like an input field.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Input>

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
        placeholder: 'Enter text',
      
    },
}
