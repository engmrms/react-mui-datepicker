/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/preview-api'
import { strings } from '../../../Locales'
import { MultiSelect } from '../../MultiSelect'

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
type Story = StoryObj<typeof MultiSelect>

const mockData = [
    { label: 'Hight', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Low', value: 3 },
]

export const Default: Story = {
    args: {
        disabled: false,
        placeholder: strings.Shared.Select,
        size: 'default',
        options: mockData,
        selectedValues: [],
        rounded: 'default',
    },
    render: arg => {
        const [storyArgs, updateArgs] = useArgs()

        return (
            <MultiSelect
                {...arg}
                options={mockData}
                selectedValues={storyArgs.selectedValues}
                onChange={(values: number[]) => {
                    // if (values !== storyArgs.selectedValues) {

                    updateArgs({ selectedValues: [...values] })
                    //}
                }}
            />
        )
    },
}
