/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'

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

function TableDemo(arg: any) {
    return (
        <Table {...arg}>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map(invoice => (
                    <TableRow key={invoice.invoice}>
                        <TableCell>{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell>$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}

const meta: Meta<typeof Table> = {
    title: 'Design System/Data Display/Table',
    component: Table,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['default', 'compact'],
            description: 'The variant of the table.',
            table: {
                type: {
                    summary: 'default | compact',
                },
                category: 'Props',
                defaultValue: { summary: 'default' },
            },
        },
        contained: {
            control: 'boolean',
            defaultValue: false,
            description: 'If true, the table will have a border.',
            table: {
                type: {
                    summary: 'boolean',
                },
                category: 'Props',
                defaultValue: { summary: 'false' },
            },
        },
        alternating: {
            control: 'boolean',
            defaultValue: false,
            description: 'If true, the table will have alternating rows.',
            table: {
                type: {
                    summary: 'boolean',
                },
                category: 'Props',
                defaultValue: { summary: 'false' },
            },
        },
    },
    args: {
        variant: 'default',
        contained: false,
        alternating: false,
    },

    parameters: {
        // layout: 'centered',
        docs: {
            description: {
                component: '<h4>A responsive table component.</h4><p>You can use the Table component to display data in a tabular format.</p>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Table>
export const Default: Story = {
    render: TableDemo,
}

export const Contained: Story = {
    render: TableDemo,
    args: {
        contained: true,
    },
}

export const Alternating: Story = {
    render: TableDemo,
    args: {
        alternating: true,
    },
}

export const Compact: Story = {
    render: TableDemo,
    args: {
        variant: 'compact',
    },
}
