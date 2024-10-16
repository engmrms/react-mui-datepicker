import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { Skeleton } from './ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { LinesPerPage, Pagination, PaginationDescription } from './paginations'
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    loading: boolean
    NoDataComponent?: JSX.Element
    onPageChange?: (number: number) => void
    totalItems?: number
    pageNumber?: number
    itemsPerPage?: number
    setLimit?: (number: number) => void
}

function DataTable<TData, TValue>({ columns, data, loading, NoDataComponent, itemsPerPage, ...rest }: DataTableProps<TData, TValue>) {
    const tableData = React.useMemo(() => (loading ? Array(10).fill({}) : data), [loading, data])
    const [pageSize, setPageSize] = useState(itemsPerPage || 10)

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

    const matches = useMediaQuery('(min-width: 801px)')

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
                    <PaginationDescription
                        currentPage={currentPage}
                        limit={pageSize}
                        totalCount={rest?.totalItems ?? table.getFilteredRowModel().rows.length}
                    />

                    <div className="flex items-center space-x-space-03 space-x-reverse">
                        <LinesPerPage
                            value={pageSize}
                            onChange={value => {
                                if (rest?.onPageChange) {
                                    rest?.onPageChange(1)
                                }
                                setPageSize(+value)
                                if (rest?.setLimit) rest?.setLimit(+value)
                            }}
                        />
                        <Pagination
                            withoutText
                            className="justify-center"
                            totalItems={rest?.totalItems ? rest?.totalItems : table.getFilteredRowModel().rows.length ?? 0}
                            selectedPage={rest?.pageNumber ?? currentPage}
                            itemsPerPage={Number(pageSize)}
                            onPageChange={page => {
                                if (rest?.onPageChange) {
                                    return rest?.onPageChange(page)
                                }
                                table.setPageIndex(page - 1)
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default DataTable

export type { ColumnDef }
