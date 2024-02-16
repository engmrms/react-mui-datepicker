/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Button } from '../../ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu'

type Checked = DropdownMenuCheckboxItemProps['checked']

const meta: Meta<typeof DropdownMenu> = {
    title: 'Design System/Navigation/Dropdown Menu',
    component: DropdownMenu,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a menu to the user — such as a set of actions or functions — triggered by a button.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: arg => (
        <DropdownMenu {...arg}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="justify-between">
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

export const CheckBoxs: Story = {
    render: arg => {
        const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
        const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
        const [showPanel, setShowPanel] = React.useState<Checked>(false)

        return (
            <DropdownMenu {...arg}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                        Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar} disabled>
                        Activity Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                        Panel
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
}

export const RadioGroup: Story = {
    render: arg => {
        const [position, setPosition] = React.useState('bottom')

        return (
            <DropdownMenu {...arg}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
}
