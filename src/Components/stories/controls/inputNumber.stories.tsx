import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { NumberInput } from '../../ui/NumberInput'

const meta: Meta<typeof NumberInput> = {
    title: 'Design System/Controls/InputNumber',
    component: NumberInput,
    tags: ['autodocs'],
    args: {
        label: 'label',
        variant: 'outline',
        colors: 'default',
        rounded: 'default',
        disabled: false,
        size: 'default',
        placeholder: '00000',
    },
    argTypes: {
        // Appearance
        value: {
            control: { type: 'number' },
            table: {
                category: 'core configuration',
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
            description: 'The value of the input number',
        },
        label: {
            description: 'The label of the input number',
            control: { type: 'text' },
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'label' },
            },
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outline', 'lighter'],
            description: 'The variant of the input number',
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | lighter' },
                defaultValue: { summary: 'outline' },
            },
        },
        colors: {
            control: { type: 'select' },
            options: ['default', 'success', 'destructive'],
            description: 'The color of the input number',
            table: {
                category: 'Appearance',
                type: { summary: 'default | success | destructive' },
                defaultValue: { summary: 'default' },
            },
        },
        rounded: {
            control: { type: 'select' },
            options: ['default', 'full'],
            description: 'The rounded of the input number',
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
        },

        size: {
            control: { type: 'select' },
            options: ['default', 'sm'],
            description: 'The size of the input number',
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
        },
        placeholder: {
            control: { type: 'text' },
            description: 'The placeholder of the input number',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: '00000' },
            },
        },

        // Behavior
        disabled: {
            control: { type: 'boolean' },
            description: 'The disabled state of the input number',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },

        // Events
        onChange: {
            action: 'onChange',
            table: {
                category: 'Events',
                type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
            },
            description: 'The onChange event of the input number',
        },
        startAdornment: {
            table: {
                disable: true,
            },
        },
        endAdornment: {
            table: {
                disable: true,
            },
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
    render: args => <NumberInputForm {...args} />,
}

function NumberInputForm(args: Story['args']) {
    const [value, setValue] = useState('')
    return <NumberInput {...args} value={value} onChange={e => setValue(e.target.value)} />
}
