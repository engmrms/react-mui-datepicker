import type { Meta, StoryObj } from '@storybook/react'

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
    render: arg => (
        <FilterGroup onValueChange={v => console.log('main', v)} className="flex gap-space-03 " {...arg}>
            <FilterSelect
                name="test"
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
                data={Array.from({ length: 10 }, (_, i) => ({
                    value: i.toString(),
                    label: `multi${i}`,
                }))}
            />
        </FilterGroup>
    ),
}
