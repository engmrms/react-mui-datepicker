/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { ColumnDef, RowSelectionState } from '@tanstack/react-table'
import { useState } from 'react'

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
    },
    args: {
        loading: false,
        enableRowSelection: true,
        enableMultiRowSelection: true,
        isFirstRowSelected: false,
        hasPagination: true,
        totalItems: 50,
        itemsPerPage: 10,
        pageNumber: 2,
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
