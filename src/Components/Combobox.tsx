/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import classNames from 'classnames'
import ExpandMore from 'google-material-icons/outlined/ExpandMore'
import { cn } from '../Lib/utils'
import useLanguage from '../Stores/useLanguage'
import { Button, ButtonProps, buttonVariants } from './ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './ui/command'
import { FormControl } from './ui/form'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ScrollArea } from './ui/scroll-area'

import { VariantProps } from 'class-variance-authority'
import React, { useState } from 'react'
import ActionLoader from './ActionLoader'

const Combobox = Popover

const ComboboxInput = CommandInput

const ComboboxEmpty = CommandEmpty

const ComboboxItem = CommandItem

const ComboboxContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-space-03" ref={ref} {...props}>
        <Command>{children}</Command>
    </PopoverContent>
))

ComboboxContent.displayName = 'ComboboxContent'

interface ButtonPropsExtend extends ButtonProps {
    isLoading?: boolean
}

const ComboboxTrigger = React.forwardRef<HTMLButtonElement, ButtonPropsExtend>(({ className, children, placeholder, isLoading, ...props }, ref) => (
    <PopoverTrigger asChild>
        <FormControl>
            <Button
                ref={ref}
                variant="outline"
                role="combobox"
                disabled={isLoading}
                className={cn(
                    'flex h-[4.8rem] w-full items-center justify-between rounded-2 border border-input bg-transparent px-space-04 text-base placeholder:text-foreground-secondary hover:border-foreground hover:bg-transparent hover:text-foreground focus-visible:outline-none active:bg-transparent active:text-foreground disabled:cursor-not-allowed disabled:bg-card disabled:text-disabled aria-[invalid=true]:border-error data-[placeholder]:text-foreground-secondary',
                    className,
                )}
                {...props}>
                {placeholder && !children && <span className="text-body-01 text-foreground-secondary">{placeholder}</span>}

                {children}
                {isLoading ? <ActionLoader /> : <ExpandMore className="  h-space-05 w-space-05 shrink-0 text-foreground  " />}
            </Button>
        </FormControl>
    </PopoverTrigger>
))

ComboboxTrigger.displayName = 'ComboboxTrigger'

const ComboboxGroup = React.forwardRef<React.ElementRef<typeof CommandGroup>, React.ComponentPropsWithoutRef<typeof CommandGroup>>(
    ({ className, children, ...props }, ref) => {
        const { dir } = useLanguage()

        const childrenCount = React.Children.count(children)
        return (
            <ComboboxContent>
                {childrenCount > 10 && (
                    <>
                        <ComboboxInput placeholder={props?.placeholder} />
                        <ComboboxEmpty>No Data Found</ComboboxEmpty>
                    </>
                )}
                <ScrollArea className={classNames({ 'h-auto': childrenCount <= 10, 'h-64': childrenCount > 10 })} dir={dir}>
                    <CommandGroup ref={ref} {...props}>
                        {children}
                    </CommandGroup>
                </ScrollArea>
            </ComboboxContent>
        )
    },
)
ComboboxGroup.displayName = 'ComboboxGroup'

interface Props<T> extends VariantProps<typeof buttonVariants> {
    options?: T[]
    optionLabel: keyof T
    optionValue: keyof T
    value: string
    placeholder: string
    isLoading?: boolean
    onChange: (value: string) => void
    triggerProps?: ButtonPropsExtend
}
const ComboboxControl = <_, T>({ options, optionLabel, placeholder, isLoading, optionValue, onChange, value, triggerProps, ...rest }: Props<T>) => {
    const [open, setOpen] = useState(false)
    const currentValue = options?.find(opt => String(opt[optionValue]) === value)?.[optionLabel] ?? ''
    return (
        <Combobox open={open}>
            <ComboboxTrigger {...triggerProps} placeholder={placeholder} onClick={() => setOpen(!open)} isLoading={isLoading}  {...rest}>
                {currentValue.toString()}
            </ComboboxTrigger>
            <ComboboxGroup>
                {options?.map(opt => (
                    <ComboboxItem
                        value={String(opt[optionLabel])}
                        key={String(opt[optionValue])}
                        onSelect={() => {
                            onChange(String(opt[optionValue]))
                            setOpen(false)
                        }}>
                        {String(opt?.[optionLabel])}
                    </ComboboxItem>
                ))}
            </ComboboxGroup>
        </Combobox>
    )
}

export { Combobox, ComboboxContent, ComboboxControl, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxTrigger }
