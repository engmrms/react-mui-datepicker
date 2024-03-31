/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger, tabVariants } from '../../ui/tabs'

const meta: Meta<typeof Tabs> = {
    title: 'Design System/Navigation/Tabs',
    component: Tabs,
    tags: ['autodocs'],

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>A set of layered sections of content—known as tab panels—that are displayed one at a time.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Tabs | typeof tabVariants>
export const Default: Story = {
    args: {
        variant: 'underline',
        dir: 'ltr',
    },
    argTypes: {
        variant: { control: 'radio', options: ['underline', 'filled'], description: "'underline', 'filled'" },
        dir: { control: 'radio', options: ['rtl', 'ltr'] },
    },
    render: (arg: any) => (
        <Tabs dir={arg?.dir} orientation={arg?.orientation} defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2" variant={arg?.variant}>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>Make changes to your account here. Click save when you&apos;re done.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button colors="primary">Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>Change your password here. After saving, you&apos;ll be logged out.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button colors="primary">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    ),
}
