import { ExpandMore } from 'google-material-icons/outlined'
import { ComponentType } from 'react'
import { useToggle } from 'usehooks-ts'
import { strings } from '../Locales'
import ShouldRender from './ShouldRender'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type ValueType = string | number

interface MultiSelectProps<T extends ValueType> {
    placeholder: string
    options: {
        label: string
        value: T
        icon?: ComponentType<{ className?: string }>
    }[]
    selectedValues: T[]
    onChange: (values: T[]) => void
    disabled?: boolean
    size?: 'sm' | 'default'
}

export function MultiSelect<T extends ValueType>({
    placeholder,
    options,
    selectedValues,
    onChange,
    disabled,
    size = 'default',
}: MultiSelectProps<T>) {
    const [isOpen, toggle] = useToggle(false)

    return (
        <Popover
            open={isOpen}
            onOpenChange={() => {
                toggle()
            }}>
            <PopoverTrigger asChild disabled={disabled}>
                <Button size={size} colors="gray" rounded="full" variant="outline" className="gap-space-01 py-space-02 pl-space-03 pr-space-04">
                    <span className="text-body-02">{placeholder}</span>
                    {selectedValues.length > 0 && (
                        <>
                            {selectedValues.length > 1 ? (
                                <label className="flex size-space-05 items-center justify-center rounded-full bg-background-secondary text-caption-01">
                                    {selectedValues.length}
                                </label>
                            ) : (
                                options
                                    .filter(option => selectedValues.includes(option.value))
                                    .map(option => (
                                        <Badge colors="gray" variant="ghost" size="sm" key={option.value}>
                                            {option.label}
                                        </Badge>
                                    ))
                            )}
                        </>
                    )}
                    <ExpandMore className="size-space-05" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-h-space-07 !w-[360x] min-w-[360px] p-space-00" align="start">
                <Command className="w-full">
                    <div className="p-space-04">
                        <ShouldRender shouldRender={options?.length > 7}>
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
                    <ShouldRender shouldRender={!!selectedValues?.length}>
                        <div className="flex items-center gap-space-04 border-t border-t-border bg-background px-space-04 py-space-03">
                            <Button
                                colors="gray"
                                variant="ghost"
                                rounded="full"
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
