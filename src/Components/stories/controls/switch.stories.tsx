import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../../ui/label'
import { Switch } from '../../ui/switch'

function SwitchDemo(arg: Story) {
    return (
        <div className="flex items-center gap-x-space-02 ">
            <Switch id="airplane-mode" {...arg} />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    )
}

const meta: Meta<typeof Switch> = {
    title: 'Design System/Controls/Switch',
    component: Switch,
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
type Story = StoryObj<typeof Switch>
export const Default: Story = {
    args: {
        disabled: false,
        asChild: false,
    },
    render: SwitchDemo,
}
