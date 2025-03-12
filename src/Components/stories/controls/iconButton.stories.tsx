import type { Meta, StoryObj } from '@storybook/react'
import { Accessibility } from 'google-material-icons/outlined'

import { Button } from '../../ui/button'

const meta: Meta<typeof Button> = {
    title: 'Design System/Controls/Icon Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">Displays a icon button or a component that looks like a button.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

// /**
//  * # The Icon Button component
//  * Shows a button
//  */
export const Default: Story = {
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'icon',
        rounded: 'default',
        asChild: false,
        disabled: false,
        tooltip: 'set an Accessibility',
    },
    argTypes: {
        size: { control: 'select', options: ['icon', 'icon-sm', 'icon-xs'], description: 'for icon button use only: icon, icon-sm,icon-xs' },
    },
    render: args => (
        <Button {...args}>
            <Accessibility />
        </Button>
    ),
}
