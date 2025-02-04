import classNames from 'classnames'
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

export interface MultiSelectProps<T extends ValueType> {
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
    dataTestId?: string
    rounded?: 'default' | 'full'
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
}: MultiSelectProps<T>) {
    const [isOpen, toggle] = useToggle(false)

    return (
        <Popover
            open={isOpen}
            onOpenChange={() => {
                toggle()
            }}>
            <PopoverTrigger asChild disabled={disabled} data-testid={dataTestId}>
                <Button size={size} rounded={rounded} colors="gray" variant="outline" className="gap-space-01 py-space-02 pl-space-03 pr-space-04">
                    <span
                        className={classNames({
                            'text-body-01': size === 'sm',
                            'text-body-02': size === 'default',
                            'text-foreground-secondary': !selectedValues?.length,
                        })}>
                        {placeholder}
                    </span>
                    {selectedValues?.length > 0 && (
                        <>
                            {selectedValues?.length > 1 ? (
                                <label className="flex size-space-05 items-center justify-center rounded-full bg-background-secondary text-caption-01">
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
                    <ExpandMore
                        className={classNames({
                            'size-8': size === 'sm',
                            'size-space-05': size === 'default',
                            'text-foreground-secondary': !selectedValues?.length,
                        })}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-h-space-07 min-w-[var(--radix-popover-trigger-width)]   p-space-00" align="start">
                <Command className="w-full">
                    <div className="p-space-02">
                        <ShouldRender shouldRender={options?.length > 7}>
                            <CommandInput placeholder={placeholder} />
                        </ShouldRender>
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {options?.map((option, index) => {
                                    const isSelected = selectedValues?.includes(option.value)
                                    return (
                                        <CommandItem
                                            data-testid={`${dataTestId}-${index}`}
                                            className="flex gap-space-02 "
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
