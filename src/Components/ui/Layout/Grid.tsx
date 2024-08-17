import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import React from 'react'
// Define the styles using CVA
const gridStyles = cva('grid', {
    variants: {
        cols: {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
            5: 'grid-cols-5',
            6: 'grid-cols-6',
            7: 'grid-cols-7',
            8: 'grid-cols-8',
            9: 'grid-cols-9',
            10: 'grid-cols-10',
            11: 'grid-cols-11',
            12: 'grid-cols-12',
        },
        gap: {
            none: '',
            small: 'gap-space-04',
            medium: 'gap-space-05',
            1: 'gap-space-01',
            2: 'gap-space-02',
            3: 'gap-space-03',
            4: 'gap-space-04',
            5: 'gap-space-05',
            6: 'gap-space-06',
            7: 'gap-space-07',
            8: 'gap-space-08',
            9: 'gap-space-09',
        },
        gapX: {
            none: '',
            small: 'gap-x-space-04',
            medium: 'gap-x-space-05',
            1: 'gap-x-space-01',
            2: 'gap-x-space-02',
            3: 'gap-x-space-03',
            4: 'gap-x-space-04',
            5: 'gap-x-space-05',
            6: 'gap-x-space-06',
            7: 'gap-x-space-07',
            8: 'gap-x-space-08',
            9: 'gap-x-space-09',
        },
        gapY: {
            none: '',
            small: 'gap-y-space-04',
            medium: 'gap-y-space-05',
            1: 'gap-y-space-01',
            2: 'gap-y-space-02',
            3: 'gap-y-space-03',
            4: 'gap-y-space-04',
            5: 'gap-y-space-05',
            6: 'gap-y-space-06',
            7: 'gap-y-space-07',
            8: 'gap-y-space-08',
            9: 'gap-y-space-09',
        },
        autoFlow: {
            row: 'grid-flow-row',
            col: 'grid-flow-col',
            dense: 'grid-flow-dense',
            rowDense: 'grid-flow-row-dense',
            colDense: 'grid-flow-col-dense',
        },
        alignItems: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
        },
        justifyItems: {
            start: 'justify-items-start',
            center: 'justify-items-center',
            end: 'justify-items-end',
            stretch: 'justify-items-stretch',
        },
        alignContent: {
            start: 'content-start',
            center: 'content-center',
            end: 'content-end',
            between: 'content-between',
            around: 'content-around',
            evenly: 'content-evenly',
        },
        justifyContent: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly',
        },
    },
    defaultVariants: {
        cols: 12,
        gap: 'small',
        gapX: 'none',
        gapY: 'none',
        autoFlow: 'row',
        alignItems: 'stretch',
        justifyItems: 'stretch',
        alignContent: 'start',
        justifyContent: 'start',
    },
})

type GridProps = React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof gridStyles>

export const Grid: React.FC<GridProps> = ({
    cols,
    gap,
    gapX,
    gapY,
    autoFlow,
    alignItems,
    justifyItems,
    alignContent,
    justifyContent,
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={gridStyles({
                cols,
                gap,
                gapX,
                gapY,
                autoFlow,
                alignItems,
                justifyItems,
                alignContent,
                justifyContent,
                className,
            })}
            {...props}>
            {children}
        </div>
    )
}

type GridTypes = '' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
function toGridColumnSpan(span: number | null): string | null {
    return span !== null ? `col-span-${span}` : null
}

function processColumns(columns: number | Partial<Record<GridTypes, number | null>> | undefined): string | null | undefined {
    let gridColumn

    if (typeof columns === 'number') {
        gridColumn = toGridColumnSpan(columns)
    } else if (typeof columns === 'object' && columns !== null) {
        gridColumn = Object.entries(columns)
            .map(([key, value]) => {
                const gridColumnClass = toGridColumnSpan(value)
                return gridColumnClass ? `${key}:${gridColumnClass}` : null
            })
            .filter(Boolean)
            .join(' ')
    }
    return gridColumn
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: number | Partial<Record<GridTypes, number | null>> | undefined
    children: React.ReactNode
}

export const GridItem: React.FC<GridItemProps> = ({ columns, children, className, ...rest }) => {
    const gridColumnClasses = processColumns(columns)

    return (
        <div className={clsx(gridColumnClasses, className)} {...rest}>
            {children}
        </div>
    )
}
