import type { Meta, StoryObj } from '@storybook/react'

import { Badge, BadgeProps } from '../../ui/badge'

function BadgDemo(arg: BadgeProps) {
    return <Badge {...arg}>badge</Badge>
}
const meta: Meta<BadgeProps> = {
    title: 'Design System/Data Display/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a badge or a component that looks like a badge.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<BadgeProps>
export const Default: Story = {
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'default',
        rounded: 'default',
    },
    render: BadgDemo,
}
