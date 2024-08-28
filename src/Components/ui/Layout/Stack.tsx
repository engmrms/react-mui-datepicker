import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import React from 'react'

const stackStyles = cva('flex', {
    variants: {
        direction: {
            row: 'flex-row',
            'row-reverse': 'flex-row-reverse',
            col: 'flex-col',
            'col-reverse': 'flex-col-reverse',
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
            10: 'gap-space-10',
            11: 'gap-space-11',
            12: 'gap-space-12',
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
            10: 'gap-x-space-10',
            11: 'gap-x-space-11',
            12: 'gap-x-space-12',
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
            10: 'gap-y-space-10',
            11: 'gap-y-space-11',
            12: 'gap-y-space-12',
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
        direction: 'row',
        gap: 'medium',
    },
})

export type StackProps = React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof stackStyles>

export const Stack: React.FC<StackProps> = ({
    direction,
    gap,
    gapX,
    gapY,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={clsx(stackStyles({ direction, gap, gapX, gapY, justifyContent, justifyItems, alignContent, alignItems }), className)}
            {...props}>
            {children}
        </div>
    )
}
