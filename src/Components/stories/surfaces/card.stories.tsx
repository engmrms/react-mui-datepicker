/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { Check, Notifications } from 'google-material-icons/outlined'
import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Switch } from '../../ui/switch'

const notifications = [
    {
        title: 'Your call has been confirmed.',
        description: '1 hour ago',
    },
    {
        title: 'You have a new message!',
        description: '1 hour ago',
    },
    {
        title: 'Your subscription is expiring soon!',
        description: '2 hours ago',
    },
]
const CardSample = (arg: any) => {
    return (
        <Card className={'w-[380px]'} {...arg}>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-space-04">
                <div className=" flex items-center gap-space-04  rounded-md border p-space-04">
                    <Notifications />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Push Notifications</p>
                        <p className="text-sm text-foreground-secondary">Send notifications to device.</p>
                    </div>
                    <Switch />
                </div>
                <div>
                    {notifications.map((notification, index) => (
                        <div key={index} className="mb-space-04 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                            <span className="flex h-space-02 w-space-02 translate-y-space-01 rounded-full bg-primary" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{notification.title}</p>
                                <p className="text-sm text-foreground-tertiary">{notification.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Check className="me-2 h-space-04 w-space-04" /> Mark all as read
                </Button>
            </CardFooter>
        </Card>
    )
}
const meta: Meta<typeof Card> = {
    title: 'Design System/Surface/Card',
    component: CardSample,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a card with header, content, and footer.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Card>
export const Default: Story = {
    render: CardSample,
}
