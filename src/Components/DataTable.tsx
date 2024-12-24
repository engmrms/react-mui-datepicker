/* eslint-disable react-hooks/exhaustive-deps */
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, Row, useReactTable } from '@tanstack/react-table'
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
    hasPagination?: boolean
    isFirstRowSelected?: boolean
    onClickRow?: (data: Row<TData>) => void
}

export function DataTable<TData, TValue>({
    columns,
    data,
    loading,
    NoDataComponent,
    itemsPerPage,
    hasPagination = true,
    onClickRow,
    isFirstRowSelected = false,
    ...rest
}: DataTableProps<TData, TValue>) {
    const tableData = React.useMemo(() => (loading ? Array(itemsPerPage || 10).fill({}) : data), [loading, itemsPerPage, data])
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

    const rowClick = (row: Row<TData>) => {
        table.resetRowSelection()
        row.toggleSelected(!row.getIsSelected())
        onClickRow && onClickRow(row)
    }

    useEffect(() => {
        const rows = table.getRowModel().rows
        if (!isFirstRowSelected || !rows.length || !data.length) return
        const firstRow = rows[0]
        table.resetRowSelection()
        firstRow.toggleSelected(true)
        onClickRow && onClickRow(firstRow)
    }, [isFirstRowSelected, table, data])

    useEffect(() => {
        table.setPageSize(pageSize)
    }, [table, pageSize])

    if (!matches) return null

    return (
        <>
            <div className="overflow-hidden rounded-t-3">
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
                            table.getRowModel().rows.map((row, i) => {
                                return (
                                    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} onClick={() => rowClick(row)}>
                                        {row.getVisibleCells().map(cell => {
                                            const item = flexRender(cell.column.columnDef.cell, cell.getContext())
                                            return (
                                                <TableCell
                                                    className=""
                                                    data-title={cell.column.columnDef.header?.toString()}
                                                    key={cell.id}
                                                    isLast={table?.getRowModel()?.rows?.length - 1 === i}>
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
            {!!table.getFilteredRowModel().rows.length && hasPagination && (
                <div className="flex items-center justify-end  px-space-04 py-space-02">
                    <PaginationDescription
                        currentPage={currentPage}
                        limit={pageSize}
                        totalCount={rest?.totalItems ?? table.getFilteredRowModel().rows.length}
                    />

                    <div className="flex items-center gap-x-space-03">
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
