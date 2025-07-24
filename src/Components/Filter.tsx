import { FilterAlt } from 'google-material-icons/filled'
import { ExpandLess, HighlightOff } from 'google-material-icons/outlined'
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { strings } from '../Locales'
import {
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
    [name: string]: string | string[]
}

interface FilterContextValue {
    value?: FilterValue
    upsert: (params: { name: string; selectedValue: string | string[] }) => void
    reset: () => void
}

interface FilterGroupProps extends React.HTMLAttributes<HTMLDivElement> {
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
type FilterData = { value: string; label: string }

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
        <div className="flex w-full items-center  gap-space-02 ">
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
            <Label htmlFor={label} className="text-Body-01 flex grow gap-space-02">
                {label}
            </Label>
        </div>
    )
}

const FilterMobileMultipleSelect = ({ data, name, multi }: { name: string; data: { value: string; label: string }[]; multi?: boolean }) => {
    const { value, upsert } = useFilterContext()
    const [search, setSearch] = useState('')
    const limit = 5

    const renderMenuItem = (item: { value: string; label: string }) => {
        const isChecked = typeof value?.[name] === 'object' && !!(value?.[name] as string[])?.find(selectedId => selectedId === item.value)

        return (
            <CommandItem key={item.label} className="py-space-01">
                <MenuItem
                    multi={multi}
                    name={name}
                    label={item.label}
                    value={item.value}
                    isCkecked={isChecked}
                    onChange={checked => {
                        const newValue = [...(value?.[name] ?? [])]
                        if (checked) newValue.push(item.value)
                        if (!checked) {
                            const index = newValue.indexOf(item.value)
                            newValue.splice(index, 1)
                        }
                        upsert({ name, selectedValue: newValue })
                    }}
                />
            </CommandItem>
        )
    }

    const filteredItems = data.filter(item => item.label.toLowerCase().includes(search.toLowerCase()))

    return (
        <Command shouldFilter={false} className="pt-space-03">
            {data.length > 9 && <CommandInput placeholder={strings.Shared.Search} value={search} onValueChange={setSearch} />}
            <CommandList className="h-full max-h-max">
                <CommandEmpty>{strings.Shared.noResultsFound}</CommandEmpty>
                {filteredItems?.slice(0, limit)?.map(renderMenuItem)}
                {filteredItems?.length > limit && (
                    <Collapsible>
                        <CollapsibleContent>{filteredItems?.slice(limit)?.map(renderMenuItem)}</CollapsibleContent>
                        <CollapsibleTrigger className="flex w-full items-center   gap-space-01 py-space-01 pe-space-02 ps-space-03  text-body-01 text-primary">
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

const FilterSelect = React.memo(
    ({ multi, data, placeholder, disabled, isLoading, rounded, size, name, defaultOpen, renderItem }: FilterSelectProps) => {
        const { value, upsert } = useFilterContext()
        const mobileView = useMediaQuery('(max-width: 767px)')
        const { dir } = useLanguage()

        if (mobileView) {
            return (
                <Collapsible dir={dir} defaultOpen={defaultOpen} className="border-b border-border-primary px-space-03 py-space-02">
                    <CollapsibleTrigger id="subcategoriesCollapsible" className=" flex w-full items-center  justify-between py-space-01 ps-space-02 ">
                        <span className="text-body-01 font-semibold">{placeholder}</span>
                        <div className="flex items-center  gap-space-01">
                            {typeof value?.[name] === 'object' && !!value?.[name]?.length && (
                                <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-inverted text-caption-01 text-inverted-foreground">
                                    {handleNumberDisplay(value?.[name]?.length || 0)}
                                </span>
                            )}
                            {typeof value?.[name] === 'string' && !!value?.[name] && (
                                <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-inverted text-caption-01 text-inverted-foreground">
                                    01
                                </span>
                            )}
                            <Button variant={'text'} type="button" size={'icon-sm'} colors={'gray'}>
                                <ExpandLess className=" transition-transform duration-300 group-data-[state=closed]:rotate-180" />
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
                                value={typeof value?.[name] === 'string' ? value?.[name] : undefined}
                                onValueChange={value => upsert({ name, selectedValue: value })}>
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
                selectedValues={(value?.[name] as string[]) || []}
                dataTestId="muliSelect"
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
    },
)

FilterSelect.displayName = 'FilterSelect'

const FilterGroup = React.forwardRef<HTMLDivElement, FilterGroupProps>(
    (
        { children, onValueChange, onValueReset, label, resetButtonProps, filterButtonProps, filterIcon, resetButtonLabel, className, ...props },
        ref,
    ) => {
        const mobileView = useMediaQuery('(max-width: 767px)')
        const [value, setValue] = useState<FilterValue>()

        const upsert = useCallback(
            ({ name, selectedValue }: { name: string; selectedValue: string | string[] }) => {
                const newValue = { ...value, [name]: selectedValue }
                setValue(newValue)
                if (!mobileView) {
                    onValueChange?.(newValue)
                }
            },
            [value, mobileView, onValueChange],
        )

        const reset = useCallback(() => {
            const newValue = { ...value }
            for (const key in newValue) {
                newValue[key] = ''
            }
            setValue(newValue)
            onValueReset?.()
        }, [value, onValueReset])

        const contextValue = useMemo(
            () => ({
                value,
                upsert,
                reset,
            }),
            [value, upsert, reset],
        )

        const hasActiveFilters = useMemo(
            () => value && Object.values(value).some(val => (Array.isArray(val) ? val.length > 0 : Boolean(val))),
            [value],
        )

        return (
            <div ref={ref} className={cn('flex', className)} {...props}>
                <FilterContext.Provider value={contextValue}>
                    {mobileView ? (
                        <FilterMobileView
                            filterButtonProps={filterButtonProps}
                            resetFilters={reset}
                            onClickFilter={() => onValueChange?.(value)}
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
