/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { ColumnDef, RowSelectionState } from '@tanstack/react-table'
import React, { useState } from 'react'

import DataTable from '../../DataTable'

const invoices = [
    {
        id: '1',
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
    },
    {
        id: '2',
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
    },
    {
        id: '3',
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        id: '4',
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
    },
    {
        id: '5',
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
    },
    {
        id: '6',
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        id: '7',
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
]

// Define the invoice type
type Invoice = {
    invoice: string
    paymentStatus: string
    totalAmount: string
    paymentMethod: string
}

// Define columns for DataTable
const columns: ColumnDef<Invoice, any>[] = [
    {
        accessorKey: 'invoice',
        header: 'Invoice',
    },
    {
        accessorKey: 'paymentStatus',
        header: 'Status',
    },
    {
        accessorKey: 'paymentMethod',
        header: 'Method',
    },
    {
        accessorKey: 'totalAmount',
        header: 'Amount',
    },
]

const sortableColumns: ColumnDef<Invoice, any>[] = [
    {
        accessorKey: 'invoice',
        header: 'Invoice',
        enableSorting: true,
    },
    {
        accessorKey: 'paymentStatus',
        header: 'Status',
        enableSorting: true,
    },
    {
        accessorKey: 'paymentMethod',
        header: 'Method',
        enableSorting: true,
    },
    {
        accessorKey: 'totalAmount',
        header: 'Amount',
        enableSorting: true,
    },
]

// Data for the DataTable
const data = invoices

const meta: Meta<typeof DataTable> = {
    title: 'Design System/Data Display/DataTable',
    component: DataTable,
    tags: ['autodocs'],
    argTypes: {
        loading: {
            control: { type: 'boolean' },
        },
        enableRowSelection: {
            control: { type: 'boolean' },
            if: { arg: 'loading', truthy: false },
        },
        enableMultiRowSelection: {
            control: { type: 'boolean' },
            if: { arg: 'loading', truthy: false },
        },
        isFirstRowSelected: {
            control: { type: 'boolean' },
        },
        hasPagination: {
            control: { type: 'boolean' },
        },
        totalItems: {
            control: { type: 'number' },
        },
        itemsPerPage: {
            control: { type: 'number' },
        },
        pageNumber: {
            control: { type: 'number' },
        },
        theme: {
            table: { disable: true },
        },
        columns: {
            table: { disable: true },
        },
        data: {
            table: { disable: true },
        },
        NoDataComponent: {
            table: { disable: true },
        },
        onPageChange: {
            table: { disable: true },
        },
        setLimit: {
            table: { disable: true },
        },
        onClickRow: {
            table: { disable: true },
        },
        rowSelection: {
            table: { disable: true },
        },
        onRowSelectionChange: {
            table: { disable: true },
        },
        onSortingChange: {
            action: 'sorting changed',
            description: 'Callback fired when column sorting state changes. Receives an array of sorting objects with column id and sort direction.',
            table: {
                type: {
                    summary: '(sorting: SortingState) => void',
                    detail: `SortingState is an array of objects:
        [
          {
            id: string,    // Column identifier
            desc: boolean  // true for descending, false for ascending
          }
        ]`,
                },
                category: 'Events',
                defaultValue: { summary: 'undefined' },
            },
            control: false,
        },
    },
    args: {
        loading: false,
        enableRowSelection: true,
        enableMultiRowSelection: true,
        isFirstRowSelected: false,
        hasPagination: true,
        itemsPerPage: 10,
        theme: {
            tableHead: { className: 'bg-background-primary text-white' },
            tableRow: { className: 'odd:bg-[#F3F3F3] even:bg-card' },
            tableCell: { className: 'border-border-primary' },
        },
    },
    parameters: {
        // layout: 'centered',
        docs: {
            description: {
                component: '<h4>A responsive table component.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
    render: function GenericDataTable({
        loading,
        enableRowSelection,
        enableMultiRowSelection,
        isFirstRowSelected,
        hasPagination,
        totalItems,
        itemsPerPage,
        pageNumber,
        theme,
    }) {
        const [selectedRows, setSelectedRows] = useState<RowSelectionState>({})

        return (
            <DataTable
                columns={columns}
                data={data}
                loading={loading}
                enableRowSelection={enableRowSelection}
                enableMultiRowSelection={enableMultiRowSelection}
                rowSelection={selectedRows}
                onRowSelectionChange={setSelectedRows}
                isFirstRowSelected={isFirstRowSelected}
                hasPagination={hasPagination}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                pageNumber={pageNumber}
                theme={theme}
            />
        )
    },
}

export const WithSorting: Story = {
    render: function DataTableWithSorting({
        loading,
        enableRowSelection,
        enableMultiRowSelection,
        isFirstRowSelected,
        hasPagination,
        totalItems,
        itemsPerPage,
        pageNumber,
        onSortingChange,
    }) {
        const [selectedRows, setSelectedRows] = useState<RowSelectionState>({})
        const [sorting, setSorting] = useState<any>([])

        const handleSortingChange = (newSorting: any) => {
            console.log('Sorting changed:', newSorting)
            setSorting(newSorting)
            onSortingChange?.(newSorting)
        }

        // Sort data based on sorting state
        const sortedData = React.useMemo(() => {
            if (!sorting.length) return data

            return [...data].sort((a, b) => {
                for (const sort of sorting) {
                    const { id, desc } = sort
                    const aValue = a[id as keyof Invoice]
                    const bValue = b[id as keyof Invoice]

                    if (aValue < bValue) return desc ? 1 : -1
                    if (aValue > bValue) return desc ? -1 : 1
                }
                return 0
            })
        }, [sorting])

        return (
            <div className="space-y-4">
                <div className="text-sm text-gray-600">
                    <p>Click on any column header to sort the data.</p>
                    <p>Sorting state will be logged to the console.</p>
                </div>
                <DataTable
                    columns={sortableColumns}
                    data={sortedData}
                    loading={loading}
                    enableRowSelection={enableRowSelection}
                    enableMultiRowSelection={enableMultiRowSelection}
                    rowSelection={selectedRows}
                    onRowSelectionChange={setSelectedRows}
                    isFirstRowSelected={isFirstRowSelected}
                    hasPagination={hasPagination}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    pageNumber={pageNumber}
                    onSortingChange={handleSortingChange}
                />
            </div>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates the sorting functionality. Click on column headers to sort the data. The sorting state is logged to the console.',
            },
        },
    },
}
