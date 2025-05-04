/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { CalendarMonth } from 'google-material-icons/outlined'
import { Button, HoverCard, HoverCardContent, HoverCardDescription, HoverCardTitle, HoverCardTrigger } from '../../../package'

const meta: Meta<typeof HoverCardContent> = {
    component: HoverCardContent,
    title: 'Design System/Data Display/HoverCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>For sighted users to preview content available behind a link.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        align: 'start',
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'inverted'],
        },
        align: {
            control: 'radio',
            options: ['start', 'center', 'end'],
        },
    },
    render: arg => (
        <div className="h-space-12">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link">Hover Here</Button>
                </HoverCardTrigger>
                <HoverCardContent {...arg}>
                    <CalendarMonth />
                    <HoverCardTitle>Title</HoverCardTitle>
                    <HoverCardDescription>Max width of the content 240px - text will wrap automatically.</HoverCardDescription>
                </HoverCardContent>
            </HoverCard>
        </div>
    ),
}
