/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { Calculate, CalendarMonth, CreditCard, Person, SentimentSatisfied, Settings } from 'google-material-icons/outlined'
import React from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '../../ui/command'

type CommandType = typeof Command

const meta: Meta<CommandType> = {
    title: 'Design System/Controls/Command',
    component: Command,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: '<h4>Fast, composable, unstyled command menu for React.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<CommandType>

export const Default: Story = {
    args: {},
    render: (arg, { globals: { dir } }) => {
        return (
            <div className="mx-auto w-[300px]">
                <Command dir={dir} {...arg} className="shadow-sm">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem className="gap-space-02">
                                <CalendarMonth size={16} />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem className="gap-space-02">
                                <SentimentSatisfied size={16} />
                                <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem disabled className="gap-space-02">
                                <Calculate size={16} />
                                <span>Calculator</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem className="gap-space-02">
                                <Person size={16} />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="gap-space-02">
                                <CreditCard size={16} />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="gap-space-02">
                                <Settings size={16} />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        )
    },
}

export const Dialog: Story = {
    args: {},
    render: (arg, { globals: { dir } }) => {
        const [open, setOpen] = React.useState(false)

        React.useEffect(() => {
            const down = (e: KeyboardEvent) => {
                if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    setOpen(open => !open)
                }
            }

            document.addEventListener('keydown', down)
            return () => document.removeEventListener('keydown', down)
        }, [])

        return (
            <div className="text-center">
                <p className="mx-auto text-sm text-muted-foreground">
                    Press{' '}
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>J
                    </kbd>
                </p>
                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." className=" rounded-none border-0 border-b" />
                    <CommandList dir={dir} {...arg}>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem className="gap-space-02">
                                <CalendarMonth size={16} />
                                <span>Calendar</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="gap-space-02">
                                <SentimentSatisfied size={16} />
                                <span>Search Emoji</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="gap-space-02">
                                <Calculate size={16} />
                                <span>Calculator</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem className="gap-space-02">
                                <Person size={16} />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="gap-space-02">
                                <CreditCard size={16} />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="gap-space-02">
                                <Settings size={16} />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>
            </div>
        )
    },
}
