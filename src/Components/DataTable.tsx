/* eslint-disable react-hooks/exhaustive-deps */
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, Row, RowData, RowSelectionState, useReactTable } from '@tanstack/react-table'
import { Skeleton } from './ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Checkbox } from './ui/checkbox'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { LinesPerPage, Pagination, PaginationDescription } from './paginations'

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends RowData, TValue> {
        className?: string
        headerColSpan?: number
        cellColSpan?: number
    }
}

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
    enableRowSelection?: boolean
    enableMultiRowSelection?: boolean
    rowSelection?: RowSelectionState
    onRowSelectionChange?: (updater: RowSelectionState | ((old: RowSelectionState) => RowSelectionState)) => void
    theme: {
        table?: string
        tableCaption?: string
        tableHeader?: string
        tableHead?: string
        tableBody?: string
        tableRow?: string
        tableCell?: string
        tableFooter?: string
        headerSelect?: string
        bodySelect?: string
    }
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
    enableRowSelection,
    enableMultiRowSelection,
    rowSelection,
    onRowSelectionChange,
    theme,
    ...rest
}: DataTableProps<TData, TValue>) {
    const tableData = React.useMemo(() => (loading ? Array(itemsPerPage || 10).fill({}) : data), [loading, itemsPerPage, data])
    const [pageSize, setPageSize] = useState(itemsPerPage || 10)

    const tableColumns = React.useMemo(() => {
        let cols = loading
            ? columns.map(column => ({
                  ...column,
                  cell: () => <Skeleton className="h-8 w-full" />,
              }))
            : columns

        // Add selection column if row selection is enabled
        if (enableRowSelection && !loading) {
            const selectionColumn: ColumnDef<TData, TValue> = {
                id: 'select',
                header: enableMultiRowSelection
                    ? ({ table }) => (
                          <Checkbox
                              checked={table.getIsAllPageRowsSelected()}
                              onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                              aria-label="Select all"
                              className={theme.headerSelect}
                              size="sm"
                              colors="primary"
                          />
                      )
                    : // to preserve the place of the checkbox when multi selection is not enabled
                      () => <div role="checkbox" className="w-[48px]" aria-hidden="true" />,
                cell: ({ row }) => (
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={value => row.toggleSelected(!!value)}
                        aria-label="Select row"
                        className={theme.bodySelect}
                        size="sm"
                        colors="primary"
                    />
                ),
                enableSorting: false,
                enableHiding: false,
            }
            cols = [selectionColumn, ...cols]
        }

        return cols
    }, [loading, columns, enableRowSelection, enableMultiRowSelection])

    const table = useReactTable({
        data: tableData,
        columns: tableColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: onRowSelectionChange,
        state: {
            rowSelection,
        },
        enableRowSelection: enableRowSelection,
        enableMultiRowSelection: enableMultiRowSelection,
        getRowId: row => row.id, // Provide a way to identify rows
    })

    const matches = useMediaQuery('(min-width: 801px)')

    const currentPage = table.getState().pagination.pageIndex + 1

    const rowClick = (row: Row<TData>) => {
        if (!onClickRow) return

        if (enableRowSelection) {
            if (enableMultiRowSelection) {
                // In multi-selection mode, toggle the clicked row
                row.toggleSelected(!row.getIsSelected())
            } else {
                // In single selection mode, reset all selections and select the clicked row
                table.resetRowSelection()
                row.toggleSelected(true)
            }
        } else {
            // Legacy behavior for when selection is not explicitly enabled
            table.resetRowSelection()
            row.toggleSelected(!row.getIsSelected())
        }
        onClickRow(row)
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

    const hasCustomWidth = columns?.some(col => col?.meta && col?.meta?.className)

    if (!matches) return null

    return (
        <>
            <div className="overflow-hidden rounded-t-3">
                <Table className={clsx(!hasCustomWidth && 'w-full table-fixed', theme.table)}>
                    <TableHeader className={theme.tableHeader}>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id} className={theme.tableRow}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <TableHead
                                            key={header.id}
                                            colSpan={header.column.columnDef.meta?.headerColSpan ?? 1}
                                            className={theme.tableHead}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className={theme.tableBody}>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, i) => {
                                return (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && 'selected'}
                                        onClick={() => rowClick(row)}
                                        className={clsx(onClickRow && 'cursor-pointer', theme.tableRow)}>
                                        {row.getVisibleCells().map(cell => {
                                            const item = flexRender(cell.column.columnDef.cell, cell.getContext())
                                            return (
                                                <TableCell
                                                    colSpan={cell.column.columnDef.meta?.cellColSpan ?? 1}
                                                    className={`${clsx(cell?.column?.columnDef?.meta?.className)} ${theme.tableCell}`}
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
                            <TableRow className={theme.tableRow}>
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
                    {loading ? (
                        <Skeleton className="me-auto h-[20px] w-space-12" />
                    ) : (
                        <PaginationDescription
                            currentPage={rest?.pageNumber ?? currentPage}
                            limit={pageSize}
                            totalCount={rest?.totalItems ?? table.getFilteredRowModel().rows.length}
                        />
                    )}

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
                            totalItems={rest?.totalItems ? rest?.totalItems : (table.getFilteredRowModel().rows.length ?? 0)}
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
