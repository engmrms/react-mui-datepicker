import { ExpandMore, HighlightOff } from 'google-material-icons/outlined'
import { ComponentType, useState } from 'react'
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
    onShowResult: () => void
    disabled?: boolean
}

export function MultiSelect<T extends ValueType>({ placeholder, options, selectedValues, onChange, onShowResult, disabled }: MultiSelectProps<T>) {
    const [tempSelectedValue, setTempSelectedValue] = useState<T[]>(selectedValues)
    const [isOpen, , toggle] = useToggle(false)

    return (
        <Popover
            open={isOpen}
            onOpenChange={open => {
                toggle(open)
                if (selectedValues?.length) return
                setTempSelectedValue(selectedValues)
            }}>
            <div className="flex h-space-08 items-center gap-space-01 rounded-full border p-space-03 pr-space-04 text-body-02">
                <PopoverTrigger asChild className="gap-space-01" disabled={disabled}>
                    <Button size="sm" colors="gray" variant="ghost" className="!p-space-00">
                        <span className="text-body-02">{placeholder}</span>
                        {tempSelectedValue.length > 0 && (
                            <div className="hidden space-x-1 lg:flex">
                                {tempSelectedValue.length > 1 ? (
                                    <label className="flex size-space-05 items-center justify-center rounded-full bg-background-secondary text-caption-01">
                                        {tempSelectedValue.length}
                                    </label>
                                ) : (
                                    options
                                        .filter(option => tempSelectedValue.includes(option.value))
                                        .map(option => (
                                            <Badge colors="gray" size="sm" key={option.value}>
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        )}
                        <ShouldRender shouldRender={tempSelectedValue?.length === 0}>
                            <ExpandMore className="size-space-05" />
                        </ShouldRender>
                    </Button>
                </PopoverTrigger>
                <ShouldRender shouldRender={tempSelectedValue?.length > 0}>
                    <HighlightOff
                        className="size-space-05 cursor-pointer text-background-foreground"
                        onClick={() => {
                            toggle(false)
                            onChange([])
                            setTempSelectedValue([])
                        }}
                    />
                </ShouldRender>
            </div>
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
                                    const isSelected = tempSelectedValue.includes(option.value)
                                    return (
                                        <CommandItem
                                            className="flex gap-space-02"
                                            key={option.value}
                                            onSelect={() => {
                                                const newSelectedValues = isSelected
                                                    ? tempSelectedValue.filter(value => value !== option.value)
                                                    : [...tempSelectedValue, option.value]
                                                setTempSelectedValue(newSelectedValues)
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
                    <div className="flex items-center gap-space-04 border-t border-t-border bg-background px-space-04 py-space-03">
                        <Button
                            colors="gray"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                onChange([])
                                setTempSelectedValue([])
                            }}
                            className="flex-1">
                            {strings.Shared.reset}
                        </Button>
                        <Button
                            colors="primary"
                            size="sm"
                            onClick={() => {
                                onChange(tempSelectedValue)
                                onShowResult()
                                toggle(!open)
                            }}
                            className="flex-1">
                            {strings.Shared.showResults}
                        </Button>
                    </div>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
