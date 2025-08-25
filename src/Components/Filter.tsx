import { FilterAlt } from 'google-material-icons/filled'
import { ExpandLess, HighlightOff } from 'google-material-icons/outlined'
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import {
    strings,
    Button,
    ButtonProps,
    Checkbox,
    cn,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    ComboboxControlNoForm,
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
    Label,
    MultiSelect,
    RadioGroup,
    RadioGroupItem,
    Sheet,
    SheetBody,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    useLanguage,
} from '../package'

// Types
type FilterValue = {
    [name: string]: string | string[] | number | undefined
}

interface FilterContextValue {
    value?: FilterValue
    upsert: (params: { name: string; selectedValue: string | string[] | undefined }) => void
    reset: () => void
}

type FilterData = { value: string; label: string }
interface FilterGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value: FilterValue
    /** Optional label for the filter group */
    label?: string
    /** Callback when filter values change */
    onValueChange?: (value?: FilterValue) => void
    /** Callback when filters are reset */
    onValueReset?: () => void
    /** Custom label for the reset button */
    resetButtonLabel?: string
    /** Additional props for the reset button */
    resetButtonProps?: ButtonProps
    /** Additional props for the filter button */
    filterButtonProps?: ButtonProps
    /** Icon for the filter button */
    filterIcon?: React.ReactNode
}

interface FilterSelectProps {
    placeholder: string
    name: string
    multi?: boolean
    data: FilterData[]
    disabled?: boolean
    isLoading?: boolean
    rounded?: 'default' | 'full'
    size?: 'default' | 'sm'
    defaultOpen?: boolean
    currentValue?: string | string[] | undefined
    renderItem?: (opt: FilterData) => React.ReactNode
}

interface MenuItemProps<T extends string | number = string> {
    label: string
    value: T
    isCkecked?: boolean
    onChange?: (checked: boolean, value: T) => void
    name: string
    multi?: boolean
}

// Context
const FilterContext = createContext<FilterContextValue | null>(null)

const useFilterContext = () => {
    const context = useContext(FilterContext)
    if (!context) {
        throw new Error('useFilterContext must be used within a FilterGroup')
    }
    return context
}

// Utility Functions
const handleNumberDisplay = (num: number) => {
    return num < 10 ? '0' + num?.toString() : num?.toString()
}

// Components
const MenuItem = <T extends string | number = string>({ label, value, isCkecked, onChange, name, multi }: MenuItemProps<T>) => {
    return (
        <div className="flex w-full items-center gap-space-02">
            {multi ? (
                <Checkbox
                    id={`${name}${value}`}
                    value={value}
                    size="sm"
                    onCheckedChange={checked => onChange?.(typeof checked === 'boolean' ? checked : false, value)}
                    checked={isCkecked}
                />
            ) : (
                <RadioGroupItem id={`${name}${value}`} value={value.toString()} />
            )}
            <Label htmlFor={`${name}${value}`} className="text-Body-01 flex grow gap-space-02">
                {label}
            </Label>
        </div>
    )
}


// FilterMobileMultipleSelect handling
function toggleMultiValue(current: string[] = [], value: string, checked: boolean): string[] {
    const newValue = new Set(current)
    if (checked) {
        newValue.add(value)
    } else {
        newValue.delete(value)
    }
    return Array.from(newValue)
}

interface FilterMobileMultipleSelectProps {
    name: string
    data: { value: string; label: string }[]
    multi?: boolean
}

const FilterMobileMultipleSelect = ({ data, name, multi }: FilterMobileMultipleSelectProps) => {
    const { value, upsert } = useFilterContext()
    const [search, setSearch] = useState('')
    const limit = 5

    const currentSelected = multi && Array.isArray(value?.[name])
        ? (value?.[name] as string[])
        : []


    const handleChange = (itemValue: string, checked: boolean) => {
        if (multi) {
            upsert({ name, selectedValue: toggleMultiValue(currentSelected, itemValue, checked) })
        }
    }

    const renderMenuItem = (item: { value: string; label: string }) => {
        const isChecked = multi
            ? currentSelected.includes(item.value)
            : value?.[name] === item.value
        return (
            <CommandItem
                key={item.value}
                className="py-space-01">
                <MenuItem
                    multi={multi}
                    name={name}
                    label={item.label}
                    value={item.value}
                    isCkecked={isChecked}
                    onChange={(checked) => handleChange(item.value, checked)}
                />
            </CommandItem>
        )
    }

    const filteredItems = useMemo(
        () => data.filter(item => item.label.toLowerCase().includes(search.toLowerCase())),
        [data, search]
    )

    return (
        <Command shouldFilter={false} className="pt-space-03">
            {data.length > 9 && <CommandInput placeholder={strings.Shared.Search} value={search} onValueChange={setSearch} />}
            <CommandList className="h-full max-h-max">
                <CommandEmpty>{strings.Shared.noResultsFound}</CommandEmpty>
                {filteredItems?.slice(0, limit)?.map(renderMenuItem)}
                {filteredItems?.length > limit && (
                    <Collapsible>
                        <CollapsibleContent>{filteredItems?.slice(limit)?.map(renderMenuItem)}</CollapsibleContent>
                        <CollapsibleTrigger className="flex w-full items-center gap-space-01 py-space-01 pe-space-02 ps-space-03 text-body-01 text-primary">
                            <span className="group-data-[state=closed]:hidden">{strings.Shared.showLess}</span>
                            <span className="group-data-[state=open]:hidden">{strings.Shared.showMore}</span>
                            <ExpandLess size={16} className={'transition-transform duration-300 group-data-[state=closed]:rotate-180'} />
                        </CollapsibleTrigger>
                    </Collapsible>
                )}
            </CommandList>
        </Command>
    )
}

const FilterMobileView = ({
    resetFilters,
    children,
    onClickFilter,
    label,
    filterButtonProps,
    filterIcon,
}: {
    children: React.ReactNode
    resetFilters: () => void
    onClickFilter: () => void
    label?: string
    filterButtonProps?: ButtonProps
    filterIcon?: React.ReactNode
}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    id="mobileFilter"
                    colors="neutral"
                    className={cn({
                        '!px-space-02': !label,
                    })}
                    {...filterButtonProps}>
                    {filterIcon || <FilterAlt />}
                    {label && <span>{label}</span>}
                </Button>
            </SheetTrigger>

            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>{strings.Shared.sortBy}</SheetTitle>
                </SheetHeader>
                <SheetBody className="px-space-00 py-space-02">{children}</SheetBody>
                <SheetFooter className="flex-row gap-space-02 p-space-04">
                    <Button id="servicesRest" size="sm" variant="text" colors="neutral" onClick={resetFilters} className="grow">
                        {strings.Shared.reset}
                    </Button>
                    <SheetClose asChild>
                        <Button id="servicesShowResults" size="sm" colors="primary" onClick={onClickFilter} className="grow">
                            {strings.Shared.showResults}
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

const FilterSelect = React.memo(({ multi, data, placeholder, disabled, isLoading, rounded, size, name, defaultOpen, renderItem }: FilterSelectProps) => {
    const { value, upsert } = useFilterContext()
    const mobileView = useMediaQuery('(max-width: 767px)')
    const { dir } = useLanguage()

    let actualValue: string | string[] | undefined

    if (multi) {
        actualValue = Array.isArray(value?.[name]) ? value?.[name] : []
    } else {
        actualValue = typeof value?.[name] === 'string' ? value?.[name] : undefined
    }

    if (mobileView) {
        return (
            <Collapsible dir={dir} defaultOpen={defaultOpen} className="border-b border-border-primary px-space-03 py-space-02">
                <CollapsibleTrigger id="subcategoriesCollapsible" className="flex w-full items-center justify-between py-space-01 ps-space-02">
                    <span className="text-body-01 font-semibold">{placeholder}</span>
                    <div className="flex items-center gap-space-01">
                        {multi && Array.isArray(actualValue) && actualValue.length > 0 && (
                            <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-inverted text-caption-01 text-inverted-foreground">
                                {handleNumberDisplay(actualValue.length)}
                            </span>
                        )}
                        {!multi && !!actualValue && (
                            <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-inverted text-caption-01 text-inverted-foreground">
                                01
                            </span>
                        )}
                        <Button variant={'text'} type="button" size={'icon-sm'} colors={'gray'} aria-label="Toggle filter options">
                            <ExpandLess className="transition-transform duration-300 group-data-[state=closed]:rotate-180" />
                        </Button>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {multi ? (
                        <FilterMobileMultipleSelect data={data} name={name} multi={multi} />
                    ) : (
                        <RadioGroup
                            name={name}
                            size="sm"
                            dir={dir}
                            value={actualValue as string}
                            onValueChange={val => upsert({ name, selectedValue: val })}>
                            <FilterMobileMultipleSelect data={data} name={name} multi={multi} />
                        </RadioGroup>
                    )}
                </CollapsibleContent>
            </Collapsible>
        )
    }

    return multi ? (
        <MultiSelect
            options={data || []}
            onChange={value => upsert({ name, selectedValue: value })}
            key={`${name}-${(actualValue as string[]).join(',')}`}
            selectedValues={(actualValue as string[]) || []}
            dataTestId={`multiSelect-${name}`}
            placeholder={placeholder}
            disabled={disabled}
            rounded={rounded}
            size={size}
            className="!w-max"
        />
    ) : (
        <ComboboxControlNoForm
            className="!w-max"
            rounded={rounded}
            key={`${name}-${actualValue || 'empty'}`}
            options={data || []}
            optionLabel="label"
            optionValue="value"
            renderItem={renderItem}
            placeholder={placeholder}
            onChange={value => upsert({ name, selectedValue: value })}
            value={(value?.[name] as string) || ''}
            size={size}
            disabled={disabled}
            isLoading={isLoading}
        />
    )
})

FilterSelect.displayName = 'FilterSelect'

const FilterGroup = React.forwardRef<HTMLDivElement, FilterGroupProps>(
    (
        {
            children,
            onValueChange,
            onValueReset,
            label,
            resetButtonProps,
            filterButtonProps,
            filterIcon,
            resetButtonLabel,
            className,
            value: controlledValue,
            ...props
        },
        ref,
    ) => {
        const mobileView = useMediaQuery('(max-width: 767px)')

        const upsert = useCallback(
            ({ name, selectedValue }: { name: string; selectedValue: string | string[] | undefined }) => {
                const newValue = { ...(controlledValue || {}), [name]: selectedValue }
                onValueChange?.(newValue)
            },
            [controlledValue, onValueChange],
        )

        const reset = useCallback(() => {
            onValueReset?.()
        }, [onValueReset])

        const contextValue = useMemo(
            () => ({
                value: controlledValue,
                upsert,
                reset,
            }),
            [controlledValue, upsert, reset],
        )

        const hasActiveFilters = useMemo(
            () => controlledValue && Object.values(controlledValue).some(val => (Array.isArray(val) ? val.length > 0 : Boolean(val))),
            [controlledValue],
        )

        return (
            <div ref={ref} className={cn('flex', className)} {...props}>
                <FilterContext.Provider value={contextValue}>
                    {mobileView ? (
                        <FilterMobileView
                            filterButtonProps={filterButtonProps}
                            resetFilters={reset}
                            onClickFilter={() => onValueChange?.(controlledValue)}
                            label={label}
                            filterIcon={filterIcon}>
                            {children}
                        </FilterMobileView>
                    ) : (
                        <>
                            {children}
                            {hasActiveFilters && (
                                <Button
                                    colors="neutral"
                                    rounded="default"
                                    variant="text"
                                    size="sm"
                                    onClick={reset}
                                    className="ms-auto"
                                    {...resetButtonProps}>
                                    {resetButtonLabel || strings.Shared.reset}
                                    <HighlightOff className="ms-space-01" />
                                </Button>
                            )}
                        </>
                    )}
                </FilterContext.Provider>
            </div>
        )
    },
)

FilterGroup.displayName = 'FilterGroup'

export { FilterGroup, FilterSelect }
