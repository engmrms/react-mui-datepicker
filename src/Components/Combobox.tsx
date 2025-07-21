/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { ExpandMore } from 'google-material-icons/outlined'
import { cn, dateFormatter } from '../Lib/utils'
import useLanguage from '../Stores/useLanguage'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './ui/command'
import { FormControl } from './ui/form'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ScrollArea } from './ui/scroll-area'

import { VariantProps } from 'class-variance-authority'
import React, { useState } from 'react'
import { strings } from '../Locales'
import ActionLoader from './ActionLoader'
import ShouldRender from './ShouldRender'
import { selectVariants } from './ui/select'

const Combobox = Popover

const ComboboxInput = CommandInput

const ComboboxEmpty = CommandEmpty

const ComboboxItem = CommandItem

const ComboboxContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
    <PopoverContent className="min-w-[var(--radix-popover-trigger-width)]  p-space-02" ref={ref} {...props}>
        <Command>{children}</Command>
    </PopoverContent>
))

ComboboxContent.displayName = 'ComboboxContent'

interface ButtonPropsExtend extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof selectVariants> {
    isLoading?: boolean
    isForm?: boolean
}

const ComboboxTrigger = React.forwardRef<HTMLButtonElement, ButtonPropsExtend>(
    ({ className, children, variant, colors, size, rounded, placeholder, isLoading, isForm = true, ...props }, ref) => {
        const buttonProps = {
            ref,
            role: 'combobox',
            'aria-expanded': false,
            'aria-label': placeholder || 'Select an option',
            title: placeholder || 'Select an option',
            disabled: isLoading,
            className: cn(selectVariants({ variant, colors, size, rounded }), className),
            ...props,
        }
        const buttonContent = (
            <>
                {placeholder && !children && <span className="pointer-events-none text-body-01 text-form-field-text-placeholder">{placeholder}</span>}
                {children && <span className="flex-1 text-right">{children}</span>}
                {isLoading ? (
                    <ActionLoader />
                ) : (
                    <ExpandMore
                        className="size-[20px]  shrink-0  transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
                        aria-hidden
                    />
                )}
            </>
        )
        if (!isForm)
            return (
                <PopoverTrigger asChild>
                    <button {...buttonProps}>{buttonContent}</button>
                </PopoverTrigger>
            )
        return (
            <PopoverTrigger asChild>
                <FormControl>
                    <button {...buttonProps}>{buttonContent}</button>
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
                <ScrollArea className={cn({ 'h-auto': childrenCount <= 7, 'h-48 sm:h-64': childrenCount > 7 })} dir={dir}>
                    <CommandGroup ref={ref} {...props} dir={document.dir}>
                        {children}
                    </CommandGroup>
                </ScrollArea>
            </ComboboxContent>
        )
    },
)
ComboboxGroup.displayName = 'ComboboxGroup'

interface Props<T> extends VariantProps<typeof selectVariants> {
    options?: T[]
    optionLabel: keyof T
    optionValue: keyof T
    renderItem?: (option: T) => React.ReactNode
    value: string
    placeholder: string
    isLoading?: boolean
    onChange: (value: string) => void
    triggerProps?: ButtonPropsExtend
    disabled?: boolean
    isDate?: boolean
    disabledOption?: (option: T) => boolean
    className?: string
}
const ComboboxControl = <_, T>({ options, optionLabel, placeholder, isLoading, optionValue, onChange, value, triggerProps, ...rest }: Props<T>) => {
    const [open, setOpen] = useState(false)
    const currentValue = (options?.length && options?.find(opt => String(opt[optionValue]) === value)?.[optionLabel]) || ''
    return (
        <Combobox open={open} onOpenChange={open => setOpen(open)}>
            <ComboboxTrigger {...triggerProps} placeholder={placeholder} isLoading={isLoading} disabled={rest?.disabled} {...rest}>
                {currentValue.toString()}
            </ComboboxTrigger>
            <ComboboxGroup placeholder={placeholder} className="w-space-10">
                {!!options?.length &&
                    options?.map(opt => (
                        <ComboboxItem
                            className={cn({
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
    renderItem,
    onChange,
    value,
    triggerProps,
    isDate,
    disabledOption,
    ...rest
}: Props<T>) => {
    const [open, setOpen] = useState(false)
    const currentValue = (options?.length && options?.find(opt => String(opt[optionValue]) === value)?.[optionLabel]) || ''
    const renderOption = (opt: T) => {
        if (renderItem) return renderItem(opt)
        if (isDate) return dateFormatter({ date: String(opt?.[optionLabel]) ?? '', format: 'long' })
        return String(opt?.[optionLabel])
    }
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
                            className={cn({
                                'relative min-w-[220px]': true,
                                'after:absolute after:bottom-auto after:start-space-01 after:top-auto after:h-[50%] after:w-[2px] after:rounded-full after:bg-primary':
                                    String(opt[optionValue]) === value,
                            })}
                            value={String(opt[optionLabel])}
                            key={String(opt[optionValue])}
                            disabled={disabledOption && disabledOption(opt)}
                            onSelect={() => {
                                onChange(String(opt[optionValue]))
                                setOpen(false)
                            }}>
                            {renderOption(opt)}
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
