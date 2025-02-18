/* eslint-disable react/prop-types */
import * as React from 'react'

import { Check, ExpandMore, KeyboardArrowDown, KeyboardArrowUp } from 'google-material-icons/outlined'

import * as SelectPrimitive from '@radix-ui/react-select'

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../Lib/utils'

const selectVariants = cva(
    ` placeholder:text-form-field-text-placeholder data-[placeholder]:text-form-field-text-placeholder  text-form-field-text-filled after:bg-form-field-border-pressed group relative
    flex w-full items-center justify-between gap-space-01 whitespace-nowrap
    aria-[invalid=true]:border-form-field-border-error  focus-within:aria-[invalid=true]:after:bg-form-field-border-error
    ps-space-03  after:absolute after:bottom-0 after:start-1/2 after:h-[2px]
    after:w-0 after:transition-all after:ease-in-out focus-within:after:w-full focus-visible:outline-none disabled:cursor-not-allowed disabled:border-border-disabled disabled:text-disabled-text-default-disabled ltr:after:-translate-x-1/2 rtl:after:translate-x-1/2 [&>span]:line-clamp-1
    `,
    {
        variants: {
            variant: {
                default: 'bg-form-field-background-darker  enabled:hover:border-form-field-border-default',
                outline:
                    'bg-form-field-background-default enabled:hover:border-form-field-border-hovered border border-form-field-border-default disabled:border-border-disabled',
                lighter: 'bg-form-field-background-lighter  enabled:hover:border-form-field-border-default',
            },
            rounded: {
                default: 'rounded-0',
                full: 'rounded-4',
            },
            colors: {
                default: 'hover:enabled:border',
                success: 'border-success',
                destructive: 'border-form-field-border-error ',
            },
            size: {
                default: 'py-space-02 text-body-02 h-[40px]',
                sm: 'py-space-01 text-body-01 h-[32px]',
            },
        },
        defaultVariants: {
            variant: 'outline',
            rounded: 'default',
            colors: 'default',
            size: 'default',
        },
    },
)

const SelectContext = React.createContext<VariantProps<typeof selectVariants>>({
    variant: 'outline',
    rounded: 'default',
    colors: 'default',
    size: 'default',
})

const Select = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & VariantProps<typeof selectVariants>
>(({ variant, size, colors, rounded, children, ...props }) => (
    <SelectPrimitive.Root {...props}>
        <SelectContext.Provider value={{ variant, size, colors, rounded }}>{children}</SelectContext.Provider>
    </SelectPrimitive.Root>
))
Select.displayName = SelectPrimitive.Root.displayName

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
    const context = React.useContext(SelectContext)

    return (
        <SelectPrimitive.Trigger
            ref={ref}
            className={cn(
                selectVariants({ variant: context.variant, size: context.size, colors: context.colors, rounded: context.rounded, className }),
            )}
            {...props}>
            {children}
            <SelectPrimitive.Icon asChild>
                <ExpandMore className="!size-[20px] shrink-0  transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton ref={ref} className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
        <KeyboardArrowUp />
    </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton ref={ref} className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
        <KeyboardArrowDown />
    </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                'relative z-50 max-h-96  overflow-hidden rounded-2 border bg-card p-space-02 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                position === 'popper' &&
                    'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                className,
            )}
            position={position}
            {...props}>
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(
                    'p-1',
                    position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width)_-_16px)]',
                )}>
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(
    ({ className, ...props }, ref) => <SelectPrimitive.Label ref={ref} className={cn('py-1.5 pl-8 pr-2 text-xs font-bold ', className)} {...props} />,
)
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(
    ({ className, children, ...props }, ref) => (
        <SelectPrimitive.Item
            ref={ref}
            className={cn(
                'relative flex w-full cursor-default select-none items-center rounded-1 py-space-02 pe-space-02 ps-space-05 text-sm leading-[2.2rem] outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-card-hover focus:bg-accent focus:text-accent-foreground',
                className,
            )}
            {...props}>
            <span className="absolute start-space-01 flex h-space-04 w-space-04 items-baseline justify-center">
                <SelectPrimitive.ItemIndicator>
                    <Check className="h-space-04 w-space-04" />
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    ),
)
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => <SelectPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />)
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
}
