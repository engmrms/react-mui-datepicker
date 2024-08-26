import { cva, type VariantProps } from 'class-variance-authority'
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
            1: 'gap-space-01',
            2: 'gap-space-02',
            3: 'gap-space-03',
            4: 'gap-space-04',
            5: 'gap-space-05',
            6: 'gap-space-06',
            7: 'gap-space-07',
            8: 'gap-space-08',
            9: 'gap-space-09',
            10: 'gap-space-10',
            11: 'gap-space-11',
            12: 'gap-space-12',
        },
        gapX: {
            none: '',
            1: 'gap-x-space-01',
            2: 'gap-x-space-02',
            3: 'gap-x-space-03',
            4: 'gap-x-space-04',
            5: 'gap-x-space-05',
            6: 'gap-x-space-06',
            7: 'gap-x-space-07',
            8: 'gap-x-space-08',
            9: 'gap-x-space-09',
            10: 'gap-x-space-10',
            11: 'gap-x-space-11',
            12: 'gap-x-space-12',
        },
        gapY: {
            none: '',
            1: 'gap-y-space-01',
            2: 'gap-y-space-02',
            3: 'gap-y-space-03',
            4: 'gap-y-space-04',
            5: 'gap-y-space-05',
            6: 'gap-y-space-06',
            7: 'gap-y-space-07',
            8: 'gap-y-space-08',
            9: 'gap-y-space-09',
            10: 'gap-y-space-10',
            11: 'gap-y-space-11',
            12: 'gap-y-space-12',
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
        gap: 1,
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

const gridItemColVariants = cva('', {
    variants: {
        base: {
            1: 'col-span-1',
            2: 'col-span-2',
            3: 'col-span-3',
            4: 'col-span-4',
            5: 'col-span-5',
            6: 'col-span-6',
            7: 'col-span-7',
            8: 'col-span-8',
            9: 'col-span-9',
            10: 'col-span-10',
            11: 'col-span-11',
            12: 'col-span-12',
        },
        sm: {
            1: 'sm:col-span-1',
            2: 'sm:col-span-2',
            3: 'sm:col-span-3',
            4: 'sm:col-span-4',
            5: 'sm:col-span-5',
            6: 'sm:col-span-6',
            7: 'sm:col-span-7',
            8: 'sm:col-span-8',
            9: 'sm:col-span-9',
            10: 'sm:col-span-10',
            11: 'sm:col-span-11',
            12: 'sm:col-span-12',
        },
        md: {
            1: 'md:col-span-1',
            2: 'md:col-span-2',
            3: 'md:col-span-3',
            4: 'md:col-span-4',
            5: 'md:col-span-5',
            6: 'md:col-span-6',
            7: 'md:col-span-7',
            8: 'md:col-span-8',
            9: 'md:col-span-9',
            10: 'md:col-span-10',
            11: 'md:col-span-11',
            12: 'md:col-span-12',
        },
        lg: {
            1: 'lg:col-span-1',
            2: 'lg:col-span-2',
            3: 'lg:col-span-3',
            4: 'lg:col-span-4',
            5: 'lg:col-span-5',
            6: 'lg:col-span-6',
            7: 'lg:col-span-7',
            8: 'lg:col-span-8',
            9: 'lg:col-span-9',
            10: 'lg:col-span-10',
            11: 'lg:col-span-11',
            12: 'lg:col-span-12',
        },
        xl: {
            1: 'xl:col-span-1',
            2: 'xl:col-span-2',
            3: 'xl:col-span-3',
            4: 'xl:col-span-4',
            5: 'xl:col-span-5',
            6: 'xl:col-span-6',
            7: 'xl:col-span-7',
            8: 'xl:col-span-8',
            9: 'xl:col-span-9',
            10: 'xl:col-span-10',
            11: 'xl:col-span-11',
            12: 'xl:col-span-12',
        },
        '2xl': {
            1: '2xl:col-span-1',
            2: '2xl:col-span-2',
            3: '2xl:col-span-3',
            4: '2xl:col-span-4',
            5: '2xl:col-span-5',
            6: '2xl:col-span-6',
            7: '2xl:col-span-7',
            8: '2xl:col-span-8',
            9: '2xl:col-span-9',
            10: '2xl:col-span-10',
            11: '2xl:col-span-11',
            12: '2xl:col-span-12',
        },
    },
    defaultVariants: {
        base: 12,
    },
})

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: VariantProps<typeof gridItemColVariants> | VariantProps<typeof gridItemColVariants>['base']
    children?: React.ReactNode[] | React.ReactNode
}

export const GridItem: React.FC<GridItemProps> = ({ columns, children, className, ...rest }) => {
    return (
        <div
            className={clsx(
                gridItemColVariants(typeof columns === 'number' ? { base: columns } : typeof columns === 'object' && columns !== null ? columns : {}),
                className,
            )}
            {...rest}>
            {children}
        </div>
    )
}
