/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { strings } from '../../../Locales'
import { MultiSelect, MultiSelectProps } from '../../MultiSelect'

const mockData = Array.from({ length: 20 }, (_, i) => ({
    value: i,
    label: `Item ${i} - ${window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2, 8)}`,
}))

const MultiSelectDemo = ({ arg }: { arg: MultiSelectProps<number> }) => {
    const [selectedValues, setSelectedValues] = useState<number[]>([])

    return (
        <MultiSelect
            {...arg}
            options={mockData}
            selectedValues={selectedValues}
            onChange={(values: number[]) => {
                setSelectedValues(values)
            }}
        />
    )
}

const meta: Meta<typeof MultiSelect> = {
    title: 'Design System/Controls/MultiSelect',
    component: MultiSelect,
    tags: ['autodocs'],
    args: {
        disabled: false,
        placeholder: strings.Shared.Select,
        size: 'default',
        selectedValues: [],
        rounded: 'default',
        variant: 'default',
        colors: 'default',
        isLoading: false,
        threshold: 1,
        options: mockData,
        checkboxSize: 'default',
        showSelectButton: false,
        selectButtonTitle: 'Select',
        onChange: undefined,
        className: undefined,
        dataTestId: undefined,
    },
    argTypes: {
        // Appearance
        placeholder: {
            control: 'text',
            description: 'The placeholder of the multi select',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Select' },
            },
        },
        size: {
            control: 'select',
            options: ['default', 'sm'],
            description: 'The size of the multi select',
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
            description: 'The rounded of the multi select',
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
        },
        variant: {
            control: 'select',
            options: ['default', 'outline', 'lighter'],
            description: 'The variant of the multi select',
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | lighter' },
                defaultValue: { summary: 'default' },
            },
        },
        colors: {
            control: 'select',
            options: ['default', 'success', 'destructive'],
            description: 'The color of the multi select',
            table: {
                category: 'Appearance',
                type: { summary: 'default | success | destructive' },
                defaultValue: { summary: 'default' },
            },
        },

        options: {
            control: 'object',
            description: 'The options of the multi select',
            table: {
                category: 'Appearance',
                type: { summary: 'number[]' },
                defaultValue: { summary: '[]' },
            },
        },
        checkboxSize: {
            control: 'select',
            options: ['default', 'sm', 'xs'],
            description: 'The checkbox size of the multi select',
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm | xs' },
                defaultValue: { summary: 'default' },
            },
        },

        // Behavior
        isLoading: {
            control: 'boolean',
            description: 'The loading state of the multi select',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        threshold: {
            control: 'number',
            description: 'The threshold of the multi select',
            table: {
                category: 'Behavior',
                type: { summary: 'number' },
                defaultValue: { summary: '1' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'The disabled state of the multi select',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        showSelectButton: {
            control: 'boolean',
            description: 'The show select button state of the multi select',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        selectButtonTitle: {
            control: 'text',
            description: 'The select button title of the multi select',
            table: {
                category: 'Behavior',
                type: { summary: 'string' },
                defaultValue: { summary: 'Select' },
            },
        },
        // Events
        onChange: {
            action: 'onChange',
            table: {
                category: 'Events',
                type: { summary: '(values: number[]) => void' },
            },
        },
        // Core Configuration
        selectedValues: {
            control: 'object',
            description: 'The selected values of the multi select',
            table: {
                category: 'Core Configuration',
                type: { summary: 'number[]' },
                defaultValue: { summary: '[]' },
            },
        },
        className: {
            control: 'text',
            description: 'The class name of the multi select',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        dataTestId: {
            control: 'text',
            description: 'The data test id of the multi select',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>A flexible dropdown component that allows users to select multiple options from a list.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<MultiSelectProps<number>>

export const Default: Story = {
    render: arg => {
        return <MultiSelectDemo arg={arg} />
    },
}
