/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Label, Stack } from '../../../package'

const meta: Meta<typeof Label> = {
    title: 'Design System/Data Display/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {},
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
    args: {
        hidden: false,
    },
    render: args => {
        return (
            <div>
                <Stack gap={2} className="flex items-center ">
                    <Checkbox id="terms" />
                    <Label {...args} htmlFor="terms">
                        Accept terms and conditions
                    </Label>
                </Stack>
            </div>
        )
    },
}
