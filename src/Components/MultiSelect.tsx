import { ExpandMore, HighlightOff } from 'google-material-icons/outlined'
import * as React from 'react'
import { strings } from '../Locales'
import ShouldRender from './ShouldRender'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type ValueType = string | number

interface MultiSelectProps<T extends ValueType> {
    placeholder: string
    options: {
        label: string
        value: T
        icon?: React.ComponentType<{ className?: string }>
    }[]
    selectedValues: T[]
    onChange: (values: T[]) => void
    onShowResult: () => void
    disabled?: boolean
}

export function MultiSelect<T extends ValueType>({ placeholder, options, selectedValues, onChange, onShowResult, disabled }: MultiSelectProps<T>) {
    return (
        <Popover>
            <PopoverTrigger asChild className="h-space-08 gap-space-01" disabled={disabled}>
                <Button variant="outline" colors="gray" rounded="full" size="sm">
                    <span className="text-body-02">{placeholder}</span>
                    {selectedValues.length > 0 && (
                        <div className="hidden space-x-1 lg:flex">
                            {selectedValues.length > 1 ? (
                                <label className="flex size-space-05 items-center justify-center rounded-full bg-background-secondary text-caption-01">
                                    {selectedValues.length}
                                </label>
                            ) : (
                                options
                                    .filter(option => selectedValues.includes(option.value))
                                    .map(option => (
                                        <Badge colors="gray" size="sm" key={option.value}>
                                            {option.label}
                                        </Badge>
                                    ))
                            )}
                        </div>
                    )}
                    <ShouldRender shouldRender={selectedValues?.length > 0}>
                        <HighlightOff className="size-space-05 text-background-foreground" onClick={() => onChange([])} />
                    </ShouldRender>
                    <ShouldRender shouldRender={selectedValues?.length === 0}>
                        <ExpandMore className="size-space-05" />
                    </ShouldRender>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-h-space-07 !w-[360x] min-w-[360px] p-space-00" align="start">
                <Command className="w-full">
                    <div className="p-space-04">
                        <ShouldRender shouldRender={options?.length > 7 || true}>
                            <CommandInput placeholder={placeholder} />
                        </ShouldRender>
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {options.map(option => {
                                    const isSelected = selectedValues.includes(option.value)
                                    return (
                                        <CommandItem
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
                        </CommandList>
                    </div>
                    <CommandSeparator />
                    <div className="flex items-center gap-space-04 bg-background px-space-04 py-space-03">
                        <Button colors="gray" variant="ghost" size="sm" onClick={() => onChange([])} className="flex-1">
                            {strings.Shared.reset}
                        </Button>
                        <Button colors="primary" size="sm" onClick={onShowResult} className="flex-1">
                            {strings.Shared.showResults}
                        </Button>
                    </div>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
