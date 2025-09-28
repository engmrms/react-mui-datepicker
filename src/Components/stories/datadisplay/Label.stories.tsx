/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { Label, Stack } from '../../../package'

const meta: Meta<typeof Label> = {
    title: 'Design System/Data Display/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        // Appearance
        hidden: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The hidden state of the label',
        },
        size: {
            control: 'select',
            options: ['default', 'sm'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
            description: 'The size of the label',
        },
        asChild: {
            table: { disable: true },
        },
    },
    args: {
        hidden: false,
        size: 'default',
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Renders an accessible label associated with controls.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Label>
export const Default: Story = {
    render: args => {
        return (
            <div>
                <Stack gap={2} className="flex items-center ">
                    <Label {...args} htmlFor="terms">
                        Accept terms and conditions
                    </Label>
                </Stack>
            </div>
        )
    },
}
