/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import classNames from 'classnames'
import ExpandMore from 'google-material-icons/outlined/ExpandMore'
import { cn, dateFormatter } from '../Lib/utils'
import useLanguage from '../Stores/useLanguage'
import { Button, ButtonProps, buttonVariants } from './ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './ui/command'
import { FormControl } from './ui/form'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ScrollArea } from './ui/scroll-area'

import { VariantProps } from 'class-variance-authority'
import React, { useState } from 'react'
import { strings } from '../Locales'
import ActionLoader from './ActionLoader'
import ShouldRender from './ShouldRender'

const Combobox = Popover

const ComboboxInput = CommandInput

const ComboboxEmpty = CommandEmpty

const ComboboxItem = CommandItem

const ComboboxContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
    <PopoverContent className="w-[var(--radix-popover-trigger-width)] min-w-[36rem] p-space-03" ref={ref} {...props}>
        <Command>{children}</Command>
    </PopoverContent>
))

ComboboxContent.displayName = 'ComboboxContent'

interface ButtonPropsExtend extends ButtonProps {
    isLoading?: boolean
    isForm?: boolean
}

const ComboboxTrigger = React.forwardRef<HTMLButtonElement, ButtonPropsExtend>(
    ({ className, children, placeholder, isLoading, isForm = true, ...props }, ref) => {
        if (!isForm)
            return (
                <PopoverTrigger asChild>
                    <Button
                        ref={ref}
                        variant="outline"
                        role="combobox"
                        disabled={isLoading}
                        className={cn(
                            'flex h-[4rem] w-auto items-center justify-between rounded-4 border border-input bg-transparent  !px-space-03    placeholder:text-foreground-secondary hover:border-foreground hover:bg-transparent hover:text-foreground focus-visible:outline-none active:bg-transparent active:text-foreground disabled:cursor-not-allowed disabled:bg-card disabled:text-disabled aria-[invalid=true]:border-error data-[placeholder]:text-foreground-secondary',
                            className,
                        )}
                        {...props}>
                        {placeholder && !children && <span className="text-body-01 text-foreground-secondary">{placeholder}</span>}
                        <span className="flex-1 truncate text-ellipsis text-right">{children}</span>
                        {isLoading ? <ActionLoader /> : <ExpandMore className="  h-space-05 w-space-05 shrink-0 text-primary-oncontainer" />}
                    </Button>
                </PopoverTrigger>
            )

        return (
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        ref={ref}
                        variant="outline"
                        role="combobox"
                        disabled={isLoading}
                        className={cn(
                            'flex  w-full items-center justify-between rounded-2 border border-input bg-transparent !px-space-03  placeholder:text-foreground-secondary hover:border-foreground hover:bg-transparent hover:text-foreground focus-visible:outline-none active:bg-transparent active:text-foreground disabled:cursor-not-allowed disabled:bg-card disabled:text-disabled aria-[invalid=true]:border-error data-[placeholder]:text-foreground-secondary',
                            className,
                        )}
                        {...props}>
                        {placeholder && !children && <span className="text-body-01 text-foreground-secondary">{placeholder}</span>}
                        <span className="flex-1 truncate text-ellipsis text-right">{children}</span>
                        {isLoading ? <ActionLoader /> : <ExpandMore className="  h-space-05 w-space-05 shrink-0 text-primary-oncontainer" />}
                    </Button>
                </FormControl>
            </PopoverTrigger>
        )
    },
)

ComboboxTrigger.displayName = 'ComboboxTrigger'

const ComboboxGroup = React.forwardRef<React.ElementRef<typeof CommandGroup>, React.ComponentPropsWithoutRef<typeof CommandGroup>>(
    ({ className, children, ...props }, ref) => {
        const { dir } = useLanguage()

        const childrenCount = React.Children.count(children)
        return (
            <ComboboxContent>
                {childrenCount > 9 && (
                    <>
                        <ComboboxInput placeholder={props?.placeholder} />
                        <ComboboxEmpty>{strings.Shared.NoDataFound}</ComboboxEmpty>
                    </>
                )}
                <ScrollArea className={classNames({ 'h-auto': childrenCount <= 7, 'h-48 sm:h-64': childrenCount > 7 })} dir={dir}>
                    <CommandGroup ref={ref} {...props} dir={document.dir}>
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
    disabled?: boolean
    isDate?: boolean
    disabledOption?: (option: T) => boolean
}
const ComboboxControl = <_, T>({ options, optionLabel, placeholder, isLoading, optionValue, onChange, value, triggerProps, ...rest }: Props<T>) => {
    const [open, setOpen] = useState(false)
    const currentValue = (options?.length && options?.find(opt => String(opt[optionValue]) === value)?.[optionLabel]) || ''
    return (
        <Combobox open={open} onOpenChange={open => setOpen(open)}>
            <ComboboxTrigger {...triggerProps} placeholder={placeholder} isLoading={isLoading} disabled={rest?.disabled} {...rest}>
                {currentValue.toString()}
            </ComboboxTrigger>
            <ComboboxGroup placeholder={placeholder}>
                {!!options?.length &&
                    options?.map(opt => (
                        <ComboboxItem
                            className={classNames({
                                relative: true,
                                'after:absolute after:bottom-auto after:right-space-01 after:top-auto after:h-[75%] after:w-[2px] after:rounded-full after:bg-primary':
                                    String(opt[optionValue]) === value,
                            })}
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

const ComboboxControlNoForm = <_, T>({
    options,
    optionLabel,
    placeholder,
    isLoading,
    optionValue,
    onChange,
    value,
    triggerProps,
    isDate,
    disabledOption,
    ...rest
}: Props<T>) => {
    const [open, setOpen] = useState(false)
    const currentValue = (options?.length && options?.find(opt => String(opt[optionValue]) === value)?.[optionLabel]) || ''
    return (
        <Combobox open={open} onOpenChange={open => setOpen(open)}>
            <ComboboxTrigger isForm={false} {...triggerProps} placeholder={placeholder} isLoading={isLoading} disabled={rest?.disabled} {...rest}>
                {isDate ? dateFormatter({ date: String(currentValue) ?? '', format: 'long' }) : currentValue.toString()}
            </ComboboxTrigger>
            <ComboboxGroup placeholder={placeholder}>
                <ShouldRender shouldRender={!options || options?.length < 1}>
                    <span className="flex items-center justify-center">{strings.Shared.NoDataFound}</span>
                </ShouldRender>
                {!!options?.length &&
                    options?.map(opt => (
                        <ComboboxItem
                            className={classNames({
                                relative: true,
                                'after:absolute after:bottom-auto after:right-space-01 after:top-auto after:h-[50%] after:w-[2px] after:rounded-full after:bg-primary':
                                    String(opt[optionValue]) === value,
                            })}
                            value={String(opt[optionLabel])}
                            key={String(opt[optionValue])}
                            disabled={disabledOption && disabledOption(opt)}
                            onSelect={() => {
                                onChange(String(opt[optionValue]))
                                setOpen(false)
                            }}>
                            {isDate ? dateFormatter({ date: String(opt?.[optionLabel]) ?? '', format: 'long' }) : String(opt?.[optionLabel])}
                        </ComboboxItem>
                    ))}
            </ComboboxGroup>
        </Combobox>
    )
}

export {
    Combobox,
    ComboboxContent,
    ComboboxControl,
    ComboboxControlNoForm,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxTrigger,
}
