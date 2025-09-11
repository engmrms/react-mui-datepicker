import type { Meta, StoryObj } from '@storybook/react'

import { FilterAlt } from 'google-material-icons/outlined'
import { DatePicker, Input, strings } from '../../../package'
import { FilterGroup, FilterSelect } from '../../Filter'

const meta: Meta<typeof FilterGroup> = {
    title: 'Design System/Controls/Filter',
    component: FilterGroup,
    tags: ['autodocs'],

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
    render: arg => (
        <FilterGroup
            onValueChange={v => console.log('main', v)}
            className="flex gap-space-03 "
            onValueReset={() => console.log('first')}
            resetButtonProps={{ rounded: 'full', size: 'default' }}
            {...arg}>
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
    ),
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
