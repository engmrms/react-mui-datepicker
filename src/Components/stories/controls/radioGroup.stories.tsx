import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../../ui/label'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'

function RadioGroupDemo(arg: Story) {
    return (
        <RadioGroup defaultValue="comfortable" {...arg} className="space-y-space-02" orientation="horizontal">
            <div className="flex items-center space-x-space-02 space-x-reverse">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-space-02 space-x-reverse">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-space-02 space-x-reverse">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup>
    )
}

const meta: Meta<typeof RadioGroup> = {
    title: 'Design System/Controls/Radio Group',
    component: RadioGroup,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    '<h4>A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof RadioGroup>
export const Default: Story = {
    args: {
        asChild: false,
        disabled: false,
    },

    render: RadioGroupDemo,
}
