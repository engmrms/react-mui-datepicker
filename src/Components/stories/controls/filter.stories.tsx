import type { Meta, StoryObj } from '@storybook/react'

import { FilterAlt } from 'google-material-icons/outlined'
import { useState } from 'react'
import { DatePicker, FilterValue, Input, strings } from '../../../package'
import { FilterGroup, FilterSelect } from '../../Filter'

const meta: Meta<typeof FilterGroup> = {
    title: 'Design System/Controls/Filter',
    component: FilterGroup,
    tags: ['autodocs'],
    argTypes: {
        // Appearance
        label: {
            description: 'The label of the filter group button on mobile view',
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Filter' },
            },
        },
        resetButtonProps: {
            description: 'The props of the reset button',
            control: 'object',
            table: {
                category: 'Appearance',
                type: { summary: 'object' },
                defaultValue: { summary: 'rounded: full, size: default' },
            },
        },
        filterButtonProps: {
            description: 'The props of the filter button on mobile view',
            control: 'object',
            table: {
                category: 'Appearance',
                type: { summary: 'object' },
                defaultValue: { summary: 'rounded: full, size: default' },
            },
        },
        resetButtonLabel: {
            description: 'The label of the reset button',
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Reset' },
            },
        },
        filterIcon: {
            description: 'The icon of the filter button on mobile view',
            control: 'object',
            table: {
                category: 'Appearance',
                type: { summary: 'object' },
                defaultValue: { summary: '<FilterAlt />' },
            },
        },

        // Events
        onValueChange: {
            description: 'Fires when the filter values change',
            action: 'onValueChange',
            table: {
                category: 'Events',
                type: { summary: '(value?: FilterValue) => void' },
            },
        },
        onValueReset: {
            description: 'Fires when the filters are reset',
            action: 'onValueReset',
            table: {
                category: 'Events',
                type: { summary: '() => void' },
            },
        },
        // value: {
        //     description: 'The value of the filter group',
        //     control: 'object',
        //     table: {
        //         category: 'Core Configuration',
        //         type: { summary: 'object' },
        //         defaultValue: { summary: 'undefined' },
        //     },
        // },

        // Core Configuration
        className: {
            description: 'The class name of the filter group',
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },
    args: {
        label: 'Filter',
        resetButtonProps: { rounded: 'full', size: 'default' },
        filterButtonProps: { rounded: 'full', size: 'default' },
        resetButtonLabel: 'Reset',
        filterIcon: <FilterAlt />,
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">Display a filter group component with filter sub components are a dynamic duo for data filtering. </h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof FilterGroup>

export const Default: Story = {
    args: {
        label: strings.Shared.Select,
        resetButtonProps: { rounded: 'full', size: 'default' },
        filterButtonProps: { rounded: 'full', size: 'default' },
        resetButtonLabel: 'Reset',
        filterIcon: <FilterAlt />,
    },
    render: arg => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [values, setValues] = useState<FilterValue | undefined>({})
        console.log('values', values)

        return (
            <FilterGroup
                onValueChange={v => {
                    console.log('values', v)
                    setValues(v)
                }}
                className="flex gap-space-03 "
                onValueReset={() => console.log('first')}
                resetButtonProps={{ rounded: 'full', size: 'default' }}
                {...arg}
                value={values || {}}>
                <FilterSelect
                    defaultOpen
                    name="test"
                    rounded="full"
                    placeholder="select"
                    data={Array.from({ length: 10 }, (_, i) => ({
                        value: i.toString(),
                        label: `label1${i}`,
                    }))}
                />
                <FilterSelect
                    name="test2"
                    multi
                    placeholder="select"
                    rounded="full"
                    data={Array.from({ length: 10 }, (_, i) => ({
                        value: i.toString(),
                        label: `multi${i}`,
                    }))}
                />
            </FilterGroup>
        )
    },
}

export const WithCustomItems: Story = {
    args: {
        label: 'With Custom Items',
        resetButtonProps: { rounded: 'full', size: 'default' },
        filterButtonProps: { rounded: 'full', size: 'default' },
        resetButtonLabel: 'Reset',
        filterIcon: <FilterAlt />,
    },
    render: arg => (
        <FilterGroup
            onValueChange={v => console.log('Filters:', v)}
            className="flex flex-wrap gap-space-03"
            onValueReset={() => console.log('Reset filters')}
            resetButtonProps={{ rounded: 'full', size: 'default' }}
            {...arg}>
            <Input type="search" placeholder="Search..." className="!w-max" rounded="full" />
            <FilterSelect
                name="status"
                placeholder="Status"
                rounded="full"
                data={[
                    { value: '1', label: 'Active' },
                    { value: '2', label: 'Inactive' },
                ]}
            />
            <FilterSelect
                name="category"
                placeholder="Category"
                multi
                rounded="full"
                data={[
                    { value: '1', label: 'Category A' },
                    { value: '2', label: 'Category B' },
                ]}
            />
            <DatePicker placeholder="Select Date" className="!w-max" rounded="full" value={null} onChange={() => {}} />
        </FilterGroup>
    ),
}
