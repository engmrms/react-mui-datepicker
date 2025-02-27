/* eslint-disable react-refresh/only-export-components */
// import { strings } from '@/Locales'
// import { PropsDTO } from '@/Models/dto'

import React, { useState } from 'react'
// import { useMediaQuery } from 'usehooks-ts'
// import BeneficiaryType from './BeneficiaryType'
// import { SubCategory } from './SubCategory'

// import classNames from 'classnames'
// import { FilterAlt } from 'google-material-icons/filled'
// import { ExpandLess, HighlightOff } from 'google-material-icons/outlined'
// import { Else, If, Then, Unless, When } from 'react-if'
import {
    Button,
    Checkbox,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    ComboboxControlNoForm,
    RadioGroup,
    RadioGroupItem,
    Sheet,
    SheetBody,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
    ShouldRender,
} from './'

// import { useGetBeneficiaryTypes } from '@/Services/lookup'

// import { useFormContext } from '@@/Core/src/Components/ui/form'
// import { useEffect } from 'react'
// import { FilterCheckList } from './FilterCheckList'
import classNames from 'classnames'
import { FilterAlt } from 'google-material-icons/filled'
import { ExpandLess, HighlightOff } from 'google-material-icons/outlined'
import { useMediaQuery } from 'usehooks-ts'
import { strings } from '../Locales'
import { MultiSelect } from './'

export const handleNumberDisplay = (num: number) => {
    return num < 10 ? '0' + num?.toString() : num?.toString()
}

// const Filters = ({ onSearch }: { onSearch: (value: string) => void }) => {
//     const mobileView = useMediaQuery('(max-width: 767px)')

//     return (
//         <If condition={mobileView}>
//             <Then>
//                 <div className="flex w-full justify-between gap-space-03 pl-space-01">
//                     <FilterMobileView />
//                 </div>
//             </Then>
//             <Else>
//                 <div className="flex items-center gap-space-03">
//                     <SubCategory />
//                     <Unless condition={isAuthenticated}>
//                         <BeneficiaryType />
//                     </Unless>
//                 </div>
//                 <When condition={!!getValues('BeneficiaryTypeIds')?.length || !!getValues('SubcategoriesIds')?.length}>
//                     <Button
//                         colors="gray"
//                         variant="ghost"
//                         className="items-center gap-space-01"
//                         onClick={() => {
//                             reset()
//                         }}>
//                         {strings.GeneralPerformanceIndicator.ClearFilters}
//                         <HighlightOff />
//                     </Button>
//                 </When>
//             </Else>
//         </If>
//     )
// }

// const FilterMobileView = () => {
//     const { watch, setValue } = useFormContext<PropsDTO.GetServicesParams>()
//     const [BeneficiaryTypeIds, SubcategoriesIds] = watch(['BeneficiaryTypeIds', 'SubcategoriesIds'])
//     const [selecedSubCat, setSelecedSubCat] = useState<string[]>(SubcategoriesIds || [])
//     const [selecedBenType, setSelecedBenType] = useState<string[]>(BeneficiaryTypeIds || [])

//     const onClickFilter = () => {
//         setValue('SubcategoriesIds', selecedSubCat)
//         if (!isAuthenticated) setValue('BeneficiaryTypeIds', selecedBenType)
//     }

//     const handleReset = () => {
//         setValue('SubcategoriesIds', [])
//         setSelecedSubCat([])
//         if (!isAuthenticated) {
//             setValue('BeneficiaryTypeIds', [])
//             setSelecedBenType([])
//         }
//     }

//     return (
//         <>
//             <Sheet>
//                 <div className="flex justify-between">
//                     <SheetTrigger asChild>
//                         <Button
//                             id="servicesFilter"
//                             variant="ghost"
//                             className={classNames({
//                                 '!px-space-00': true,
//                             })}>
//                             <FilterAlt className="me-space-01" />
//                             <Unless condition={isAuthenticated}>{strings.Shared.filter}</Unless>
//                             <When condition={!!SubcategoriesIds?.length || !!BeneficiaryTypeIds?.length}>
//                                 <span className="ms-space-01 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-background-secondary text-caption-01 text-primary">
//                                     {BeneficiaryTypeIds && SubcategoriesIds
//                                         ? handleNumberDisplay(BeneficiaryTypeIds?.length + SubcategoriesIds?.length)
//                                         : ''}
//                                     {!BeneficiaryTypeIds && SubcategoriesIds ? handleNumberDisplay(SubcategoriesIds?.length) : ''}
//                                 </span>
//                             </When>
//                         </Button>
//                     </SheetTrigger>
//                 </div>
//                 <SheetContent className="flex flex-col gap-0 bg-white p-0" side="bottom">
//                     <SheetHeader title={strings.Shared.sortBy} />
//                     <SheetBody className="px-space-04 py-space-00">
//                         <div className="grow">
//                             <Collapsible defaultOpen>
//                                 <CollapsibleTrigger
//                                     id="subcategoriesCollapsible"
//                                     className="flex w-full items-center justify-between py-space-03 [&>svg]:data-[state=closed]:rotate-180">
//                                     <div className="flex grow items-center justify-between gap-space-01">
//                                         <span className="text-body-01">{strings.Shared.serviceType}</span>
//                                         <When condition={!!SubcategoriesIds?.length}>
//                                             <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-background-secondary text-caption-01 text-primary">
//                                                 {handleNumberDisplay(SubcategoriesIds?.length)}
//                                             </span>
//                                         </When>
//                                     </div>
//                                     <ExpandLess className="text-primary" />
//                                 </CollapsibleTrigger>
//                                 <CollapsibleContent>
//                                     <SubCategory mobileView setSelectedSubCatMobile={setSelecedSubCat} />
//                                 </CollapsibleContent>
//                             </Collapsible>
//                             <Unless condition={isAuthenticated}>
//                                 <Collapsible className="border-y">
//                                     <CollapsibleTrigger
//                                         id="beneficiaryTypeIdsCollapsible"
//                                         className="flex w-full items-center justify-between py-space-03 [&>svg]:data-[state=closed]:rotate-180">
//                                         <div className="flex grow items-center justify-between gap-space-01">
//                                             <span className="text-body-01">{strings.Shared.beneficiaryType}</span>
//                                             <When condition={!!BeneficiaryTypeIds?.length}>
//                                                 <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-background-secondary text-caption-01 text-primary">
//                                                     {handleNumberDisplay(BeneficiaryTypeIds?.length)}
//                                                 </span>
//                                             </When>
//                                         </div>
//                                         <ExpandLess className="text-primary" />
//                                     </CollapsibleTrigger>
//                                     <CollapsibleContent>
//                                         <BeneficiaryType mobileView setSelecedBenType={setSelecedBenType} />
//                                     </CollapsibleContent>
//                                 </Collapsible>
//                             </Unless>
//                         </div>
//                     </SheetBody>
//                     <SheetFooter className="p-space-04">
//                         <div className="flex bg-background">
//                             <Button id="servicesRest" size="sm" variant="ghost" colors="gray" onClick={handleReset} className="grow">
//                                 {strings.Shared.reset}
//                             </Button>
//                             <SheetClose asChild className="">
//                                 <Button id="servicesShowResults" size="sm" colors="primary" onClick={onClickFilter} className="grow">
//                                     {strings.Shared.showResults}
//                                 </Button>
//                             </SheetClose>
//                         </div>
//                     </SheetFooter>
//                 </SheetContent>
//             </Sheet>
//             <When condition={!isAuthenticated && (!!SubcategoriesIds?.length || !!BeneficiaryTypeIds?.length)}>
//                 <button id="servicesRest" className="flex items-center gap-space-01 text-body-02" onClick={handleReset}>
//                     {strings.Shared.reset}
//                     <HighlightOff />
//                 </button>
//             </When>
//         </>
//     )
// }
// export default Filters

// interface GetServicesParams {
//     Name?: string | null
//     ServiceCategoryId: string | null
//     SubcategoriesIds: string[]
//     BeneficiaryTypeIds: string[]
//     Limit: number
//     Offset: number
//     IntegrationValidity?: string
//     IsMostUsed?: boolean
// }

// type BeneficiaryTypeFilterProps = {
//     mobileView?: boolean
//     setSelecedBenType?: React.Dispatch<React.SetStateAction<string[]>>
// }

// const BeneficiaryType = ({ mobileView, setSelecedBenType }: BeneficiaryTypeFilterProps) => {
//     const { setValue, watch } = useFormContext<GetServicesParams>()
//     const [BeneficiaryTypeIds, ServiceCategoryId] = watch(['BeneficiaryTypeIds', 'ServiceCategoryId'])
//     const localize = useSwitchData()
//     const [selectedBeneIds, setSelectedBeneIds] = useState<string[]>(BeneficiaryTypeIds || [])
//     const { data, isLoading } = useGetBeneficiaryTypes(ServiceCategoryId)
//     const { BeneficiaryTypes } = data ?? {}

//     const handleChange = (checked: boolean | string, value: string) => {
//         if (typeof checked === 'boolean' && checked) {
//             setSelectedBeneIds(current => [...current, value])
//             if (setSelecedBenType) setSelecedBenType(current => [...current, value])
//             return
//         }
//         setSelectedBeneIds(current => current.filter(id => id != value))
//         if (setSelecedBenType) setSelecedBenType(current => current.filter(id => id != value))
//     }

//     const onClickFilter = () => {
//         setValue('BeneficiaryTypeIds', selectedBeneIds)
//     }
//     const onClickClear = () => {
//         setSelectedBeneIds([])
//         setValue('BeneficiaryTypeIds', [])
//     }

//     const onChange = (values: string[]) => {
//         setSelectedBeneIds(values)
//         setValue('BeneficiaryTypeIds', values)
//     }

//     useEffect(() => {
//         setSelectedBeneIds(BeneficiaryTypeIds)
//     }, [BeneficiaryTypeIds])

//     return (
//         <If condition={mobileView}>
//             <Then>
//                 <FilterCheckList
//                     data={BeneficiaryTypes ?? []}
//                     selectedItems={selectedBeneIds}
//                     onChange={handleChange}
//                     onClear={onClickClear}
//                     onFilter={onClickFilter}
//                     name="beneficiaryType"
//                     data-testid="beneficiaryTypeTestId"
//                 />
//             </Then>
//             <Else>
//                 <MultiSelect
//                     options={
//                         BeneficiaryTypes?.map(value => ({
//                             value: value?.Id,
//                             label: localize(value?.NameAr, value?.NameEn),
//                         })) || []
//                     }
//                     onChange={onChange}
//                     selectedValues={selectedBeneIds}
//                     dataTestId="beneficiaryTypeMuliSelect"
//                     placeholder={strings.Shared.beneficiaryType}
//                     disabled={isLoading || !BeneficiaryTypes?.length}
//                 />
//             </Else>
//         </If>
//     )
// }

// interface ApiDynamicEntity<T = number> {
//     Id: T
//     NameAr: string
//     NameEn: string
// }

// type FilterCheckListProps<T extends string | number = string> = {
//     data: ApiDynamicEntity<T>[]
//     selectedItems: T[]
//     onChange: (checked: boolean | string, value: T) => void
//     onClear: () => void
//     onFilter: () => void
//     name: string
// }

// const FilterCheckList = <T extends string | number = string>({ data, onChange, selectedItems, onClear, onFilter, name }: FilterCheckListProps<T>) => {
//     const localize = useSwitchData()
//     const mobileView = useMediaQuery('(max-width: 767px)')

//     return (
//         <>
//             <div
//                 className={classNames({
//                     'p-space-04': !mobileView,
//                     'py-space-04': mobileView,
//                 })}>
//                 {data?.map(item => (
//                     <MenuItem
//                         name={name}
//                         key={item.NameEn}
//                         label={localize(item.NameAr, item.NameEn)}
//                         value={item.Id}
//                         isCkecked={!!selectedItems.find(selectedId => selectedId == item.Id)}
//                         onChange={onChange}
//                     />
//                 ))}
//             </div>
//             <div className={classNames('flex gap-space-04 px-space-04 py-space-03', { 'bg-background': !mobileView })}>
//                 <Unless condition={mobileView}>
//                     <Button id="servicesRest" size="sm" variant="ghost" colors="primary" onClick={onClear} className="grow">
//                         {strings.Shared.reset}
//                     </Button>
//                     <Button id="servicesShowResults" size="sm" colors="primary" onClick={onFilter} className="grow">
//                         {strings.Shared.showResults}
//                     </Button>
//                 </Unless>
//             </div>
//         </>
//     )
// }

// interface MenuItemProps<T extends string | number = string> {
//     label: string
//     value: T
//     isCkecked?: boolean
//     onChange: (checked: boolean, value: T) => void
//     name: string
// }

// const MenuItem = <T extends string | number = string>({ label, value, isCkecked, onChange, name }: MenuItemProps<T>) => {
//     return (
//         <div className="flex items-center justify-between p-space-01 hover:bg-card-hover">
//             <label htmlFor={label} className="text-Body-01 flex grow gap-space-02 font-medium">
//                 {label}
//             </label>
//             <Checkbox
//                 id={`${name}${value}`}
//                 value={value}
//                 onCheckedChange={checked => onChange(typeof checked === 'boolean' ? checked : false, value)}
//                 checked={isCkecked}
//             />
//         </div>
//     )
// }
type Value = { [name: string]: string | string[] }
interface FileContext {
    upsert: ({ name, selectedValue }: { name: string; selectedValue: string | string[] }) => void
    value?: Value
}
const FilterContext = React.createContext<FileContext | null>(null)

const FilterGroup = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement> & { onValueChange?: (value?: Value) => void }>(
    ({ children, onValueChange, ...props }, ref) => {
        const [value, setValue] = useState<Value>()
        const mobileView = useMediaQuery('(max-width: 767px)')

        const upsert = ({ name, selectedValue }: { name: string; selectedValue: string | string[] }) => {
            const newValue = { ...value, [name]: selectedValue }
            setValue(newValue)
            onValueChange?.(newValue)
        }
        const resetFilters = () => {
            const newValue = { ...value }
            for (const k in newValue) {
                newValue[k] = ''
            }
            setValue(newValue)
        }

        return (
            <div ref={ref} {...props}>
                <FilterContext.Provider value={{ value, upsert }}>
                    <ShouldRender shouldRender={mobileView}>
                        <FilterMobileView resetFilters={resetFilters}>{children}</FilterMobileView>
                    </ShouldRender>

                    <ShouldRender shouldRender={!mobileView}>
                        {children}
                        <ShouldRender shouldRender={value && Object.keys(value).length > 0}>
                            <Button colors={'neutral'} rounded={'default'} variant={'text'} size={'sm'} onClick={resetFilters}>
                                {strings.Shared.reset}
                                <HighlightOff className="ms-space-01" />
                            </Button>
                        </ShouldRender>
                    </ShouldRender>
                </FilterContext.Provider>
            </div>
        )
    },
)

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
}

const FilterSelect = ({ multi, data, placeholder, disabled, isLoading, rounded, size, name }: FilterSelectProps) => {
    const context = React.useContext(FilterContext)
    const mobileView = useMediaQuery('(max-width: 767px)')
    console.log(context?.value?.[name], name)
    if (mobileView)
        return (
            <Collapsible defaultOpen>
                <CollapsibleTrigger
                    id="subcategoriesCollapsible"
                    className="flex w-full items-center justify-between py-space-03 [&>svg]:data-[state=closed]:rotate-180">
                    <div className="flex grow items-center justify-between gap-space-01">
                        <span className="text-body-01">{placeholder}</span>
                        <ShouldRender shouldRender={!!context?.value?.[name]?.length}>
                            <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-background-secondary text-caption-01 text-primary">
                                {/* {handleNumberDisplay(context?.value?.[name]?.length || 0)} */}
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
                console.log('multi', value)
                context?.upsert({ name, selectedValue: value })
            }}
            selectedValues={(context?.value?.[name] as string[]) || []}
            dataTestId="beneficiaryTypeMuliSelect"
            placeholder={placeholder}
            disabled={disabled}
            rounded={rounded}
            size={size}
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
}: {
    children: React.ReactNode
    onValueChange?: (value?: Value) => void
    resetFilters: () => void
}) => {
    const onClickFilter = () => {}

    return (
        <>
            <Sheet>
                <div className="flex justify-between">
                    <SheetTrigger asChild>
                        <Button
                            id="servicesFilter"
                            variant="ghost"
                            className={classNames({
                                '!px-space-00': true,
                            })}>
                            <FilterAlt className="me-space-01" />

                            {/* <When condition={!!SubcategoriesIds?.length || !!BeneficiaryTypeIds?.length}>
                                <span className="ms-space-01 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-background-secondary text-caption-01 text-primary">
                                    {BeneficiaryTypeIds && SubcategoriesIds
                                        ? handleNumberDisplay(BeneficiaryTypeIds?.length + SubcategoriesIds?.length)
                                        : ''}
                                    {!BeneficiaryTypeIds && SubcategoriesIds ? handleNumberDisplay(SubcategoriesIds?.length) : ''}
                                </span>
                            </When> */}
                        </Button>
                    </SheetTrigger>
                </div>
                <SheetContent className="flex flex-col gap-0 bg-white p-0" side="bottom">
                    <SheetHeader title={strings.Shared.sortBy} />
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
            {/* <When condition={!isAuthenticated && (!!SubcategoriesIds?.length || !!BeneficiaryTypeIds?.length)}>
                <button id="servicesRest" className="flex items-center gap-space-01 text-body-02" onClick={handleReset}>
                    {strings.Shared.reset}
                    <HighlightOff />
                </button>
            </When> */}
        </>
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
