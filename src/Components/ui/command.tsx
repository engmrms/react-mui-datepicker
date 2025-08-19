/* eslint-disable react-refresh/only-export-components */
import { DialogProps, DialogTitle } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive, useCommandState } from 'cmdk'
import { Search } from 'google-material-icons/outlined'
import * as React from 'react'

import { Dialog, DialogContent, DialogHeader } from '../../Components/ui/dialog'
import { cn } from '../../Lib/utils'
import useLanguage from '../../Stores/useLanguage'
import { ScrollArea } from './scroll-area'

const Command = React.forwardRef<React.ElementRef<typeof CommandPrimitive>, React.ComponentPropsWithoutRef<typeof CommandPrimitive>>(
    ({ className, ...props }, ref) => (
        <CommandPrimitive
            filter={(value, searchText) => {
                if (value?.toLowerCase()?.includes(searchText?.toLowerCase())) return 1
                return 0
            }}
            ref={ref}
            className={cn('flex h-full w-full flex-col  rounded-md bg-popover text-popover-foreground', className)}
            {...props}
        />
    ),
)
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
    return (
        <Dialog {...props}>
            <DialogContent className="overflow-hidden p-0 shadow-lg">
                <DialogHeader className="hidden">
                    <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    )
}

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(
    ({ className, ...props }, ref) => (
        <div
            className={cn(
                'mb-space-03 flex h-[40px] items-center gap-space-02 rounded border border-form-field-border-default bg-form-field-background-default px-space-04 py-space-02 focus-within:border-form-field-border-pressed hover:border-form-field-border-hovered',
                className,
            )}
            dir={document.dir}>
            <Search className="shrink-0 text-icon-default" />
            <CommandPrimitive.Input
                data-slot="command-input"
                ref={ref}
                className={
                    'flex h-full  w-full border-none bg-transparent text-sm outline-none placeholder:text-body-01 placeholder:text-foreground-secondary disabled:cursor-not-allowed disabled:opacity-50'
                }
                {...props}
            />
        </div>
    ),
)

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>(
    ({ className, ...props }, ref) => {
        const { dir } = useLanguage()
        return (
            <ScrollArea dir={dir}>
                <CommandPrimitive.List data-slot="command-list" ref={ref} className={cn('max-h-[300px]', className)} {...props} />
            </ScrollArea>
        )
    },
)

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>(
    ({ className, ...props }, ref) => (
        <CommandPrimitive.Empty data-slot="command-empty" ref={ref} className={cn('my-auto text-center text-body-01', className)} {...props} />
    ),
)

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(
    ({ className, ...props }, ref) => (
        <CommandPrimitive.Group
            ref={ref}
            data-slot="command-group"
            className={cn(
                'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
                className,
            )}
            {...props}
        />
    ),
)

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator data-slot="command-separator" ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(
    ({ className, ...props }, ref) => (
        <CommandPrimitive.Item
            data-slot="command-item"
            ref={ref}
            className={cn(
                'relative flex cursor-default select-none items-center rounded-1 py-space-02 pe-space-02 ps-space-03 text-body-01 outline-none aria-selected:bg-card-hover  data-[disabled]:pointer-events-none data-[disabled]:text-disabled',
                className,
            )}
            {...props}
        />
    ),
)

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span data-slot="command-shortcut" className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
CommandShortcut.displayName = 'CommandShortcut'

export {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    useCommandState,
}
