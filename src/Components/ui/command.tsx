/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'google-material-icons/outlined'
import * as React from 'react'

import { Dialog, DialogContent } from '../../Components/ui/dialog'
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
            className={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', className)}
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
            className="mb-space-03 flex h-[40px] items-center gap-space-02 rounded-2 border border-border bg-muted px-space-03 py-space-02"
            cmdk-input-wrapper=""
            dir={document.dir}>
            <Search className="size-[2.2rem] shrink-0 text-foreground-tertiary" />
            <CommandPrimitive.Input
                ref={ref}
                className={cn(
                    'flex h-full  w-full border-none bg-transparent text-sm outline-none placeholder:text-body-01 placeholder:text-foreground-secondary disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
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
                <CommandPrimitive.List ref={ref} className={cn('max-h-[300px]', className)} {...props} />
            </ScrollArea>
        )
    },
)

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>(
    (props, ref) => (
        <CommandPrimitive.Empty
            ref={ref}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-sm"
            {...props}
        />
    ),
)

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(
    ({ className, ...props }, ref) => (
        <CommandPrimitive.Group
            ref={ref}
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
>(({ className, ...props }, ref) => <CommandPrimitive.Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />)
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(
    ({ className, ...props }, ref) => (
        <CommandPrimitive.Item
            ref={ref}
            className={cn(
                'pe-space-02 relative flex cursor-default select-none items-center rounded-1 py-space-02 ps-space-03 text-body-01 outline-none aria-selected:bg-card-hover  data-[disabled]:pointer-events-none data-[disabled]:text-disabled',
                className,
            )}
            {...props}
        />
    ),
)

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
CommandShortcut.displayName = 'CommandShortcut'

export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut }
