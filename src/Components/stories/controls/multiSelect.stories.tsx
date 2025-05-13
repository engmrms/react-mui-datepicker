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
    argTypes: {},
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
    },
    render: arg => {
        return <MultiSelectDemo arg={arg} />
    },
}
