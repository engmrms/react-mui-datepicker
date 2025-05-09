import type { Meta, StoryObj } from '@storybook/react'

import { NumberInput } from '../../ui/NumberInput'
import { useState } from 'react'

const meta: Meta<typeof NumberInput> = {
    title: 'Design System/Controls/InputNumber',
    component: NumberInput,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'number' },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a form input number field or a component that looks like an input number field.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof NumberInput>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        label: 'label',
        variant: 'outline',
        colors: 'default',
        rounded: 'default',
        disabled: false,
        size: 'default',
        placeholder: '00000',
    },
    render: args => <NumberInputForm {...args} />,
}

function NumberInputForm(args: Story['args']) {
    const [value, setValue] = useState('')
    return <NumberInput {...args} value={value} onChange={e => setValue(e.target.value)} />
}
