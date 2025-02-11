import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../../ui/checkbox'

type CheckboxType = typeof Checkbox

const meta: Meta<CheckboxType> = {
    title: 'Design System/Controls/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>A control that allows the user to toggle between checked and not checked.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<CheckboxType>

export const Default: Story = {
    args: {
        asChild: false,
        disabled: false,
    },
    render: (arg, { globals: { dir } }) => (
        <div className="flex items-center gap-space-01">
            <Checkbox {...arg} id="terms" dir={dir} />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
            </label>
        </div>
    ),
}

export const Indeterminate: Story = {
    args: {
        asChild: false,
        disabled: false,
    },
    render: (arg, { globals: { dir } }) => (
        <div className="flex items-center gap-space-01">
            <Checkbox {...arg} id="terms" dir={dir} checked={'indeterminate'} />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
            </label>
        </div>
    ),
}
