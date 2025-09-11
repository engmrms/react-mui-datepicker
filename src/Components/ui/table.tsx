/* eslint-disable react/prop-types */
import * as React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../Lib/utils'

const tableVariants = cva('border-y-table-cell-border w-full caption-bottom border-y [&_td:last-child]:border-e-0 [&_th:last-child]:border-e-0', {
    variants: {
        variant: {
            default: '[&_td]:py-space-04 [&_td]:px-space-04 [&_td]:h-space-09',
            compact: '[&_td]:py-space-02 [&_td]:px-space-04 [&_td]:h-space-08',
        },
        alternating: {
            true: '[&_tr:nth-child(even)>td]:bg-table-background-row-alt',
        },
        contained: {
            true: '',
        },
    },

    defaultVariants: {
        variant: 'default',
        alternating: false,
        contained: false,
    },
})

const tableContainerVariants = cva('relative w-full overflow-hidden overflow-x-auto', {
    variants: {
        contained: {
            true: 'border-x border-x-table-cell-border rounded-1',
        },
    },
})

export interface tableContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tableContainerVariants> {}
export interface tableProps extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, tableProps>(({ className, variant, alternating, contained, ...props }, ref) => (
    <div className={cn(tableContainerVariants({ contained }))}>
        <table ref={ref} className={cn(tableVariants({ className, variant, alternating, contained }))} {...props} />
    </div>
))
Table.displayName = 'Table'

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('bg-table-background-header', className)} {...props} />
))
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn('bg-primary text-primary-foreground', className)} {...props} />
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            'data-[state=selected]:bg-table-background-row-selected-hovered hover:bg-table-background-row-hovered transition-colors',
            className,
        )}
        {...props}
    />
))
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            'border-e-table-cell-border border-b-table-cell-border text-table-text-head h-space-08 border-b border-e px-space-04 py-space-02 text-center align-middle text-caption-01 font-medium  [&:has([role=checkbox])]:w-[53px]',
            className,
        )}
        {...props}
    />
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement> & { isLast?: boolean }>(
    ({ isLast, className, ...props }, ref) => (
        <td
            ref={ref}
            className={cn(
                'border-b-table-cell-border border-b text-center align-middle text-body-02 font-normal text-foreground',
                className,
                isLast && 'border-b-transparent',
            )}
            {...props}
        />
    ),
)
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(({ className, ...props }, ref) => (
    <caption ref={ref} className={cn('mt-4 text-body-01 text-muted-foreground', className)} {...props} />
))
TableCaption.displayName = 'TableCaption'

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
