import classNames from 'classnames'
import { ChevronLeft, ChevronRight } from 'google-material-icons/outlined'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { cn } from '../Lib/utils'
import { strings } from '../Locales'
import useLanguage from '../Stores/useLanguage'
import ShouldRender from './ShouldRender'
import { PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Pagination as ShadPagination } from './ui/pagination'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface Props {
    totalItems: number
    onPageChange: (page: number) => void
    selectedPage: number
    className?: string
    withoutText?: boolean
    itemsPerPage?: number
}

const Pagination = ({ totalItems, onPageChange, selectedPage, className, withoutText, itemsPerPage = 6 }: Props) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage)
    const pages = Array.from(Array(pageCount).keys())

    const isLastItems = (i: number) =>
        (selectedPage === pageCount - 3 && i === pageCount - 2) ||
        (selectedPage === pageCount - 2 && i === pageCount - 5) ||
        (selectedPage === pageCount - 1 && (i === pageCount - 4 || i === pageCount - 5)) ||
        (selectedPage === pageCount && (selectedPage === i + 3 || selectedPage === i + 4 || selectedPage === i + 5))

    const handleScroll = () => {
        const listId = document.getElementById('gridList')
        setTimeout(() => {
            listId
                ? listId.scrollIntoView({ behavior: window.navigator.userAgent.indexOf('iPhone') !== -1 ? 'auto' : 'smooth' })
                : window.scrollTo({ top: 0, behavior: window.navigator.userAgent.indexOf('iPhone') !== -1 ? 'auto' : 'smooth' })
        }, 500)
    }

    const handlePageClick = (selected: number) => {
        handleScroll()
        onPageChange(selected + 1)
    }

    if (!pageCount || pageCount <= 1) return null

    return (
        <ShadPagination className={cn('', className)}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        data-testid="paginationPrevius"
                        hasText={!withoutText}
                        className={classNames({
                            'cursor-pointer': true,
                            'pointer-events-none text-disabled': selectedPage === 1,
                        })}
                        onClick={() => {
                            handlePageClick(selectedPage - 2)
                        }}
                    />
                </PaginationItem>
                <ShouldRender shouldRender={pageCount <= 6}>
                    {pages?.map(i => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                data-testid={`pagination${i}`}
                                isActive={selectedPage === i + 1}
                                className={classNames({
                                    'cursor-pointer': true,
                                })}
                                onClick={() => {
                                    handlePageClick(i)
                                }}>
                                {i + 1 < 10 ? `0${i + 1}` : i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                </ShouldRender>
                <ShouldRender shouldRender={pageCount > 6}>
                    {pages?.map(i => (
                        <React.Fragment key={uuidv4()}>
                            <ShouldRender shouldRender={(selectedPage < 5 && i < 5) || i + 1 === pageCount || i === 0}>
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        data-testid={`pagination${i}`}
                                        isActive={selectedPage === i + 1}
                                        className={classNames({
                                            'cursor-pointer': true,
                                        })}
                                        onClick={() => {
                                            handlePageClick(i)
                                        }}>
                                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            </ShouldRender>
                            <ShouldRender
                                key={uuidv4()}
                                shouldRender={
                                    selectedPage >= 5 &&
                                    (selectedPage === i || selectedPage === i + 2 || selectedPage === i + 1 || isLastItems(i)) &&
                                    i + 1 !== pageCount
                                }>
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        data-testid={`pagination${i}`}
                                        isActive={selectedPage === i + 1}
                                        className={classNames({
                                            'cursor-pointer': true,
                                        })}
                                        onClick={() => {
                                            handlePageClick(i)
                                        }}>
                                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            </ShouldRender>
                            <ShouldRender
                                shouldRender={selectedPage >= 5 && (selectedPage === i || selectedPage === i + 3) && selectedPage < pageCount - 3}>
                                <Break />
                            </ShouldRender>
                            <ShouldRender shouldRender={selectedPage < 5 && i === 5}>
                                <Break />
                            </ShouldRender>
                            <ShouldRender shouldRender={selectedPage >= 5 && selectedPage > pageCount - 4 && i === 0}>
                                <Break />
                            </ShouldRender>
                        </React.Fragment>
                    ))}
                </ShouldRender>

                <PaginationItem>
                    <PaginationNext
                        data-testid="paginationNext"
                        hasText={!withoutText}
                        className={classNames({
                            'cursor-pointer': true,
                            'pointer-events-none text-disabled': selectedPage === pageCount,
                        })}
                        onClick={() => {
                            handlePageClick(selectedPage)
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </ShadPagination>
    )
}

const Break = () => (
    <PaginationItem className="flex w-space-05 items-center justify-center text-center">
        <PaginationLink
            className={classNames({
                'pointer-events-none': true,
            })}>
            ...
        </PaginationLink>
    </PaginationItem>
)

const PaginationDescription = ({ currentPage, totalCount, limit = 10 }: { currentPage: number; totalCount: number; limit: number }) => {
    const pageCount = Math.ceil(totalCount / limit)
    return <div className="flex-1 text-body-01">{strings.formatString(strings.Shared.PaginationDesc, currentPage, pageCount)}</div>
}
const LinesPerPage = ({ value, onChange }: { value: number; onChange: (value: string) => void }) => {
    const { dir } = useLanguage()
    return (
        <>
            <span className="block whitespace-nowrap text-body-01">{strings.Shared.LinesPerPage} :</span>
            <Select dir={dir} value={value.toString()} onValueChange={val => onChange(val)}>
                <SelectTrigger>
                    <SelectValue placeholder={strings.Shared.Select} />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}

export interface SliderPaginationProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    totalPages: number
    disabled?: boolean
}
const SliderPagination = ({ setCurrentPage, currentPage, totalPages, disabled }: SliderPaginationProps) => {
    if (totalPages <= 1) return null

    return (
        <div className="flex gap-space-02">
            <button
                disabled={disabled ?? currentPage === 1}
                className="!p-space-02 disabled:border-disabled disabled:text-disabled"
                onClick={() =>
                    setCurrentPage(prev => {
                        if (prev > 1) return prev - 1
                        return prev
                    })
                }>
                <ChevronRight className="ltr:rotate-180" />
            </button>
            <button
                disabled={disabled ?? currentPage === totalPages}
                className="!p-space-02 disabled:border-disabled disabled:text-disabled"
                onClick={() =>
                    setCurrentPage(prev => {
                        if (disabled) return prev
                        return prev + 1
                    })
                }>
                <ChevronLeft className="ltr:rotate-180" />
            </button>
        </div>
    )
}

export { LinesPerPage, Pagination, PaginationDescription, SliderPagination }
