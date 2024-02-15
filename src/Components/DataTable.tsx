import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { strings } from '../Locales/index'
import { Skeleton } from './ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Pagination } from './paginations'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    loading: boolean
    NoDataComponent?: JSX.Element
}

function DataTable<TData, TValue>({ columns, data, loading, NoDataComponent }: DataTableProps<TData, TValue>) {
    const tableData = React.useMemo(() => (loading ? Array(10).fill({}) : data), [loading, data])
    const [pageSize, setPageSize] = useState(10)

    const tableColumns = React.useMemo(
        () =>
            loading
                ? columns.map(column => ({
                      ...column,
                      cell: () => <Skeleton className="h-8 w-full" />,
                  }))
                : columns,
        [loading, columns],
    )

    const table = useReactTable({
        data: tableData,
        columns: tableColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    const matches = useMediaQuery('(min-width: 768px)')

    const pageCount = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex + 1

    useEffect(() => {
        table.setPageSize(pageSize)
    }, [table, pageSize])
    if (!matches) return null
    return (
        <>
            <div className="overflow-hidden rounded-2 border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => {
                                return (
                                    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                        {row.getVisibleCells().map(cell => {
                                            const item = flexRender(cell.column.columnDef.cell, cell.getContext())
                                            return (
                                                <TableCell className="" data-title={cell.column.columnDef.header?.toString()} key={cell.id}>
                                                    {item}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    {NoDataComponent}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {!!table.getFilteredRowModel().rows.length && (
                <div className="flex items-center justify-end ">
                    <div className="flex-1 text-body-02">
                        {strings.formatString(strings.Shared.PaginationDesc, currentPage, pageCount, table.getFilteredRowModel().rows.length)}
                    </div>
                    <div className="flex items-center space-x-space-03 space-x-reverse">
                        <span className="block whitespace-nowrap text-body-01">{strings.Shared.LinesPerPage} :</span>
                        <Select value={pageSize.toString()} onValueChange={value => setPageSize(+value)}>
                            <SelectTrigger className="">
                                <SelectValue placeholder={strings.Shared.Select} />
                            </SelectTrigger>
                            <SelectContent className="!min-w-fit">
                                <SelectGroup>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="15">15</SelectItem>
                                    <SelectItem value="20">20</SelectItem>
                                    <SelectItem value="25">25</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Pagination
                            withoutText
                            className="justify-center"
                            totalItems={table.getFilteredRowModel().rows.length ?? 0}
                            selectedPage={currentPage}
                            itemsPerPage={Number(pageSize)}
                            onPageChange={page => table.setPageIndex(page - 1)}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default DataTable

export type { ColumnDef }
