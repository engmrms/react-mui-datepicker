import { useVirtualizer } from '@tanstack/react-virtual'
import { VariantProps } from 'class-variance-authority'
import { ExpandMore } from 'google-material-icons/outlined'
import React, { ComponentType } from 'react'
import { useToggle } from 'usehooks-ts'
import { cn } from '../Lib'
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
}: MultiSelectProps<T>) {
    const [isOpen, toggle] = useToggle(false)
    const [search, setSearch] = React.useState('')

    const filteredItems = options.filter(item => item.label.toLowerCase().includes(search.toLowerCase()))

    return (
        <Popover
            open={isOpen}
            onOpenChange={() => {
                toggle()
            }}>
            <PopoverTrigger asChild disabled={disabled} data-testid={dataTestId}>
                <button className={cn(selectVariants({ variant, colors, size, rounded }), className)}>
                    <span className="shrink-0 text-body-01 text-form-field-text-placeholder ">{placeholder}</span>
                    {selectedValues?.length > 0 && (
                        <>
                            {selectedValues?.length > 1 ? (
                                <label className="flex size-space-05 shrink-0 items-center justify-center rounded-full bg-background-secondary text-caption-01">
                                    {selectedValues.length}
                                </label>
                            ) : (
                                options
                                    ?.filter(option => selectedValues?.includes(option.value))
                                    ?.map(option => (
                                        <Badge colors="gray" variant="ghost" size="sm" key={option.value}>
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
            <PopoverContent className="min-h-space-07 min-w-[var(--radix-popover-trigger-width)]   p-space-00" align="start">
                <Command className="w-full" shouldFilter={false}>
                    <div className="p-space-02">
                        <ShouldRender shouldRender={options?.length > 7}>
                            <CommandInput placeholder={placeholder} value={search} onValueChange={setSearch} />
                        </ShouldRender>
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandBody options={filteredItems} dataTestId={dataTestId} onChange={onChange} selectedValues={selectedValues} />
                        </CommandList>
                    </div>
                    <ShouldRender shouldRender={!!selectedValues?.length}>
                        <div className="flex items-center gap-space-04 border-t border-t-border bg-background px-space-04 py-space-02">
                            <Button
                                colors="gray"
                                variant="ghost"
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

function CommandBody<T extends ValueType>({ options, selectedValues, dataTestId, onChange }: Omit<MultiSelectProps<T>, 'placeholder'>) {
    const parentRef = React.useRef<HTMLDivElement>(null)
    const rowVirtualizer = useVirtualizer({
        count: options.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 35, // Adjust based on your row height
        overscan: 5, // Improves scroll performance
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
                        <Checkbox className="mr-auto" checked={isSelected} />
                    </CommandItem>
                )
            })}
        </CommandGroup>
    )
}
