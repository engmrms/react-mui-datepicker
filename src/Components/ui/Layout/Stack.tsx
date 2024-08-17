import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const stackStyles = cva('flex', {
    variants: {
        direction: {
            row: 'flex-row',
            'row-reverse': 'flex-row-reverse',
            col: 'flex-col',
            'col-reverse': 'flex-col-reverse',
        },
        spacing: {
            none: '',
            small: 'gap-space-04',
            medium: 'gap-space-05',
        },
    },
    defaultVariants: {
        direction: 'row',
        spacing: 'medium',
    },
})

export type StackProps = React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof stackStyles>

export const Stack: React.FC<StackProps> = ({ direction, spacing, className, children, ...props }) => {
    return (
        <div className={stackStyles({ direction, spacing, className })} {...props}>
            {children}
        </div>
    )
}
