import { useVirtualizer } from '@tanstack/react-virtual'
import { VariantProps } from 'class-variance-authority'
import { ExpandMore } from 'google-material-icons/outlined'
import React, { ComponentType, useCallback, useMemo } from 'react'
import { useToggle } from 'usehooks-ts'
import { cn, debounce } from '../Lib'
import { strings } from '../Locales'
import ActionLoader from './ActionLoader'
import ShouldRender from './ShouldRender'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { selectVariants } from './ui/select'
type ValueType = string | number
type Options<T> = {
    label: string
    value: T
    icon?: ComponentType<{ className?: string }>
}
export interface MultiSelectProps<T extends ValueType> extends VariantProps<typeof selectVariants> {
    placeholder: string
    options: Options<T>[]
    selectedValues: T[]
    onChange: (values: T[]) => void
    disabled?: boolean
    dataTestId?: string
    className?: string
    isLoading?: boolean
    checkboxSize?: 'default' | 'sm' | 'xs'
    threshold?: number
}

export function MultiSelect<T extends ValueType>({
    placeholder,
    options,
    selectedValues,
    onChange,
    disabled,
    size = 'default',
    dataTestId = '',
    rounded = 'default',
    variant = 'outline',
    colors = 'default',
    isLoading = false,
    className,
    checkboxSize = 'default',
    threshold = 1,
}: Readonly<MultiSelectProps<T>>) {
    const [isOpen, toggle] = useToggle(false)
    const [search, setSearch] = React.useState('')
    const [inputValue, setInputValue] = React.useState('')

    const debouncSearch = useCallback(() => debounce(value => setSearch(value), 300), [])

    const filteredItems = useMemo(() => options.filter(item => item.label.toLowerCase().includes(search.toLowerCase())), [options, search])

    return (
        <Popover
            open={isOpen}
            onOpenChange={() => {
                toggle()
                if (!isOpen) {
                    setInputValue('')
                    setSearch('')
                }
            }}>
            <PopoverTrigger asChild disabled={disabled} data-testid={dataTestId}>
                <button className={cn(selectVariants({ variant, colors, size, rounded }), className)}>
                    <span className="shrink-0 text-body-01 text-form-field-text-placeholder ">{placeholder}</span>
                    {selectedValues?.length > 0 && (
                        <>
                            {selectedValues?.length > threshold ? (
                                <label className="ms-auto flex size-space-05 shrink-0 items-center justify-center rounded-full  bg-inverted text-caption-01 text-inverted-foreground">
                                    {selectedValues.length}
                                </label>
                            ) : (
                                options
                                    ?.filter(option => selectedValues?.includes(option.value))
                                    ?.map(option => (
                                        <Badge colors="gray" variant="ghost" size="sm" className="ms-auto" key={option.value}>
                                            {option.label}
                                        </Badge>
                                    ))
                            )}
                        </>
                    )}

                    {isLoading ? (
                        <ActionLoader />
                    ) : (
                        <ExpandMore
                            className="size-[20px]  shrink-0  transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
                            aria-hidden
                        />
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent
                className="min-h-space-07 min-w-[var(--radix-popover-trigger-width)] p-space-00   max-md:max-w-[var(--radix-popper-available-width)]"
                align="start">
                <Command className="w-full" shouldFilter={false}>
                    <div className="p-space-02">
                        <ShouldRender shouldRender={options?.length > 7}>
                            <CommandInput
                                placeholder={placeholder}
                                value={inputValue}
                                onValueChange={value => {
                                    setInputValue(value)
                                    debouncSearch()(value)
                                }}
                            />
                        </ShouldRender>
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandBody
                                options={filteredItems}
                                dataTestId={dataTestId}
                                onChange={onChange}
                                selectedValues={selectedValues}
                                checkboxSize={checkboxSize}
                            />
                        </CommandList>
                    </div>
                    <ShouldRender shouldRender={!!selectedValues?.length}>
                        <div className="flex items-center gap-space-04 border-t border-t-border bg-background px-space-04 py-space-02">
                            <Button
                                colors="neutral"
                                variant="text"
                                size="sm"
                                onClick={() => {
                                    onChange([])
                                    toggle()
                                }}
                                className="flex-1">
                                {strings.Shared.reset}
                            </Button>
                        </div>
                    </ShouldRender>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

function CommandBody<T extends ValueType>({
    options,
    selectedValues,
    dataTestId,
    onChange,
    checkboxSize,
}: Readonly<Omit<MultiSelectProps<T>, 'placeholder'>>) {
    const parentRef = React.useRef<HTMLDivElement>(null)
    const rowVirtualizer = useVirtualizer({
        count: options.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 36, // Adjust based on your row height
        overscan: 10, // Improves scroll performance
    })

    return (
        <CommandGroup ref={parentRef} className="overflow-auto">
            {rowVirtualizer.getVirtualItems()?.map((virtualItem, index) => {
                const option = options[virtualItem.index]
                const isSelected = selectedValues?.includes(option.value)
                return (
                    <CommandItem
                        data-testid={`${dataTestId}-${index}`}
                        className="flex gap-space-02"
                        key={option.value}
                        onSelect={() => {
                            const newSelectedValues = isSelected
                                ? selectedValues.filter(value => value !== option.value)
                                : [...selectedValues, option.value]
                            onChange(newSelectedValues)
                        }}>
                        {option.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                        <span>{option.label}</span>
                        <Checkbox className="ms-auto" checked={isSelected} size={checkboxSize} />
                    </CommandItem>
                )
            })}
        </CommandGroup>
    )
}
