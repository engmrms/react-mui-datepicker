/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'

const AvatarExample = (arg: any) => (
    <Avatar {...arg}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
)

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: 'Design System/Data Display/Avatar',
    tags: ['autodocs'],
    argTypes: {
        // Appearance
        asChild: {
            table: { disable: true },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>An image element with a fallback for representing the user.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: AvatarExample,
}
