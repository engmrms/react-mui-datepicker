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

type Story = StoryObj<typeof tabVariants | typeof Tabs>
export const Default: Story = {
    args: {
        variant: 'underline',
        dir: 'ltr',
        size: 'default',
        disabled: false,
        underline: false,
        orientation: 'horizontal',
    },
    argTypes: {
        variant: { control: 'radio', options: ['underline', 'filled'], description: "'underline', 'filled'" },
        dir: { control: 'radio', options: ['rtl', 'ltr'] },
        size: { control: 'select', options: ['default', 'sm'] },
        orientation: { control: 'select', options: ['horizontal', 'vertical'] },
        disabled: { control: 'boolean' },
        underline: { control: 'boolean', description: 'only with variant: underline' },
    },
    render: (arg: any) => (
        <Tabs dir={arg?.dir} defaultValue="account" className="w-[400px]">
            <TabsList variant={arg?.variant} size={arg.size} underline={arg?.underline} orientation={arg?.orientation}>
                <TabsTrigger value="account" disabled={arg?.disabled}>
                    Account
                </TabsTrigger>
                <TabsTrigger value="password" disabled={arg?.disabled}>
                    Password
                </TabsTrigger>
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

const tabs = Array.from({ length: 10 }, (_, i) => ({
    id: `tab${i + 1}`,
    label: `Tab ${i + 1}`,
    content: <div>Content for Tab {i + 1}</div>,
}))
export const Responsive: Story = {
    args: {
        variant: 'underline',
        dir: 'ltr',
        size: 'default',
        disabled: false,
        underline: false,
        orientation: 'horizontal',
    },
    argTypes: {
        variant: { control: 'radio', options: ['underline', 'filled'], description: "'underline', 'filled'" },
        dir: { control: 'radio', options: ['rtl', 'ltr'] },
        size: { control: 'select', options: ['default', 'sm'] },
        orientation: { control: 'select', options: ['horizontal', 'vertical'] },
        disabled: { control: 'boolean' },
        underline: { control: 'boolean', description: 'only with variant: underline' },
    },
    render: (arg: any) => (
        <Tabs dir={arg?.dir} defaultValue={tabs[0].id}>
            <TabsList variant={arg?.variant} size={arg.size} underline={arg?.underline} orientation={arg?.orientation}>
                {tabs.map(tab => (
                    <TabsTrigger key={tab.id} value={tab.id} disabled={arg?.disabled}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(tab => (
                <TabsContent key={tab.id} value={tab.id}>
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    ),
}
