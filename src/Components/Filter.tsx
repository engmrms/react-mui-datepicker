import React, { useState } from 'react'

import {
    Button,
    Checkbox,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    ComboboxControlNoForm,
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
    ShouldRender,
} from './'

import { FilterAlt } from 'google-material-icons/filled'
import { ExpandLess, HighlightOff } from 'google-material-icons/outlined'
import { useMediaQuery } from 'usehooks-ts'
import { strings } from '../Locales'
import { cn, useLanguage } from '../package'

const handleNumberDisplay = (num: number) => {
    return num < 10 ? '0' + num?.toString() : num?.toString()
}

type Value = { [name: string]: string | string[] }
interface FileContext {
    upsert: ({ name, selectedValue }: { name: string; selectedValue: string | string[] }) => void
    value?: Value
}
const FilterContext = React.createContext<FileContext | null>(null)

const useFilterContext = (onValueChange?: (value?: Value) => void) => {
    const [value, setValue] = useState<Value>()
    const mobileView = useMediaQuery('(max-width: 767px)')

    const upsert = ({ name, selectedValue }: { name: string; selectedValue: string | string[] }) => {
        const newValue = { ...value, [name]: selectedValue }
        setValue(newValue)
        if (!mobileView) onValueChange?.(newValue)
    }

    const resetFilters = () => {
        const newValue = { ...value }
        for (const k in newValue) {
            newValue[k] = ''
        }
        setValue(newValue)
    }

    return { value, upsert, resetFilters }
}

const FilterGroup = React.forwardRef<
    HTMLDivElement,
    React.HtmlHTMLAttributes<HTMLDivElement> & { label?: string; onValueChange?: (value?: Value) => void }
>(({ children, onValueChange, label, ...props }, ref) => {
    const mobileView = useMediaQuery('(max-width: 767px)')
    const { value, resetFilters, upsert } = useFilterContext(onValueChange)

    return (
        <div ref={ref} {...props}>
            <FilterContext.Provider value={{ value, upsert }}>
                <ShouldRender shouldRender={mobileView}>
                    <FilterMobileView resetFilters={resetFilters} onClickFilter={() => onValueChange?.(value)} label={label}>
                        {children}{' '}
                    </FilterMobileView>
                </ShouldRender>

                <ShouldRender shouldRender={!mobileView}>
                    {children}
                    <ShouldRender shouldRender={value && Object.values(value).some(Boolean)}>
                        <Button colors={'neutral'} rounded={'default'} variant={'text'} size={'sm'} onClick={resetFilters} className="ms-auto">
                            {strings.Shared.reset}
                            <HighlightOff className="ms-space-01" />
                        </Button>
                    </ShouldRender>
                </ShouldRender>
            </FilterContext.Provider>
        </div>
    )
})

FilterGroup.displayName = 'FilterGroup'

interface FilterSelectProps {
    placeholder: string
    name: string
    multi?: boolean
    data: { value: string; label: string }[]
    disabled?: boolean
    isLoading?: boolean
    rounded?: 'default' | 'full'
    size?: 'default' | 'sm'
    defaultOpen?: boolean
}

const FilterSelect = ({ multi, data, placeholder, disabled, isLoading, rounded, size, name, defaultOpen }: FilterSelectProps) => {
    const context = React.useContext(FilterContext)
    const mobileView = useMediaQuery('(max-width: 767px)')
    const { dir } = useLanguage()

    if (mobileView)
        return (
            <Collapsible dir={dir} defaultOpen={defaultOpen}>
                <CollapsibleTrigger
                    id="subcategoriesCollapsible"
                    className="flex w-full items-center justify-between py-space-03 [&>svg]:data-[state=closed]:rotate-180">
                    <div className="flex grow items-center justify-between gap-space-01">
                        <span className="text-body-01">{placeholder}</span>
                        <ShouldRender shouldRender={typeof context?.value?.[name] === 'object' && !!context?.value?.[name]?.length}>
                            <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-background-secondary text-caption-01 text-primary">
                                {handleNumberDisplay(context?.value?.[name]?.length || 0)}
                            </span>
                        </ShouldRender>
                    </div>
                    <ExpandLess className="text-primary" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <ShouldRender shouldRender={multi}>
                        <div className="py-space-04">
                            {data?.map(item => (
                                <MenuItem
                                    multi={multi}
                                    name={name}
                                    key={item.label}
                                    label={item.label}
                                    value={item.value}
                                    isCkecked={
                                        typeof context?.value?.[name] === 'object' &&
                                        !!(context?.value?.[name] as string[])?.find(selectedId => selectedId == item.value)
                                    }
                                    onChange={value =>
                                        value && context?.upsert({ name, selectedValue: [...(context?.value?.[name] ?? []), item.value] })
                                    }
                                />
                            ))}
                        </div>
                    </ShouldRender>

                    <ShouldRender shouldRender={!multi}>
                        <div className="py-space-04">
                            <RadioGroup
                                name={name}
                                dir={dir}
                                value={typeof context?.value?.[name] === 'string' ? context?.value?.[name] : undefined}
                                onValueChange={value => {
                                    context?.upsert({ name, selectedValue: value })
                                }}>
                                {data?.map(item => <MenuItem multi={multi} name={name} key={item.label} label={item.label} value={item.value} />)}
                            </RadioGroup>
                        </div>
                    </ShouldRender>
                </CollapsibleContent>
            </Collapsible>
        )

    return multi ? (
        <MultiSelect
            options={data || []}
            onChange={value => {
                context?.upsert({ name, selectedValue: value })
            }}
            selectedValues={(context?.value?.[name] as string[]) || []}
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
            placeholder={placeholder}
            onChange={value => {
                context?.upsert({ name, selectedValue: value })
            }}
            value={(context?.value?.[name] as string) || ''}
            size={size}
            disabled={disabled}
            isLoading={isLoading}
        />
    )
}

const FilterMobileView = ({
    resetFilters,
    children,
    onClickFilter,
    label,
}: {
    children: React.ReactNode
    resetFilters: () => void
    onClickFilter: () => void
    label?: string
}) => {
    return (
        <Sheet>
            <div className="flex justify-between">
                <SheetTrigger asChild>
                    <div className="flex items-center gap-space-01">
                        <Button
                            id="servicesFilter"
                            variant="text"
                            colors={'neutral'}
                            className={cn({
                                '!px-space-02': !label,
                            })}>
                            <FilterAlt />
                            {label && <span>label</span>}
                        </Button>
                    </div>
                </SheetTrigger>
            </div>
            <SheetContent className="flex flex-col gap-0 bg-white p-0" side="bottom">
                <SheetHeader>
                    <SheetTitle>{strings.Shared.sortBy}</SheetTitle>
                </SheetHeader>
                <SheetBody className="px-space-04 py-space-00">{children}</SheetBody>
                <SheetFooter className="p-space-04">
                    <div className="flex bg-background">
                        <Button id="servicesRest" size="sm" variant="ghost" colors="gray" onClick={resetFilters} className="grow">
                            {strings.Shared.reset}
                        </Button>
                        <SheetClose asChild className="">
                            <Button id="servicesShowResults" size="sm" colors="primary" onClick={onClickFilter} className="grow">
                                {strings.Shared.showResults}
                            </Button>
                        </SheetClose>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

interface MenuItemProps<T extends string | number = string> {
    label: string
    value: T
    isCkecked?: boolean
    onChange?: (checked: boolean, value: T) => void
    name: string
    multi?: boolean
}

const MenuItem = <T extends string | number = string>({ label, value, isCkecked, onChange, name, multi }: MenuItemProps<T>) => {
    return (
        <div className="flex items-center justify-between p-space-01 hover:bg-card-hover">
            <label htmlFor={label} className="text-Body-01 flex grow gap-space-02 font-medium">
                {label}
            </label>
            <ShouldRender shouldRender={multi}>
                <Checkbox
                    id={`${name}${value}`}
                    value={value}
                    onCheckedChange={checked => onChange?.(typeof checked === 'boolean' ? checked : false, value)}
                    checked={isCkecked}
                />
            </ShouldRender>
            <ShouldRender shouldRender={!multi}>
                <RadioGroupItem id={`${name}${value}`} value={value.toString()} />
            </ShouldRender>
        </div>
    )
}
export { FilterGroup, FilterSelect }
