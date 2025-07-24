import type { Meta, StoryObj } from '@storybook/react'

import { FilterAlt } from 'google-material-icons/outlined'
import { Stack, strings } from '../../../package'
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

export const RenderItem: Story = {
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
                renderItem={opt => (
                    <Stack className="w-full text-body-01" justifyContent={'between'}>
                        <span>{opt.label}</span>
                        <span>{opt.value}</span>
                    </Stack>
                )}
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
