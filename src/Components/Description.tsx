import { cva, VariantProps } from 'class-variance-authority'
import { GoogleMaterialIcon } from 'google-material-icons/outlined'
import React, { forwardRef, PropsWithChildren } from 'react'
import { cn } from '../Lib/utils'

const dlVariants = cva('grid  border-b border-border-secondary text-body-01 ', {
    variants: {
        variant: {
            default: '[&>dt]:text-foreground-secondary  [&>dd]:font-medium',
            list: '[&>dd]:text-foreground-secondary  [&>dt]:font-medium',
        },
        orientation: {
            vertical: 'grid-cols-1 gap-space-01',
            horizental: 'grid-cols-1   gap-space-02  sm:grid-cols-[min(50%,theme(spacing.80))_auto]',
        },
        lastItem: {
            true: 'border-none',
        },
        stretch: {
            true: '',
        },

        padding: {
            default: 'p-space-04',
            none: 'p-space-00',
        },
    },
    compoundVariants: [
        {
            orientation: 'horizental',
            stretch: true,
            className: 'sm:grid-cols-2 [&>dd]:text-end',
        },
    ],
    defaultVariants: {
        orientation: 'horizental',
        variant: 'default',
        padding: 'default',
    },
})

export type DescriptionProps = {
    title: string
    icon?: GoogleMaterialIcon
} & VariantProps<typeof dlVariants>

const Description = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & PropsWithChildren>(({ children, className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('rounded-2 bg-background', className)} {...props}>
            {children}
        </div>
    )
})
Description.displayName = 'Description'

const DescriptionItem = forwardRef<HTMLDListElement, React.HTMLAttributes<HTMLDListElement> & PropsWithChildren<DescriptionProps>>(
    ({ icon: Icon, variant, title, children, orientation, stretch, lastItem, padding, className, ...props }, ref) => {
        return (
            <dl ref={ref} className={cn(dlVariants({ variant, orientation, stretch, lastItem, padding }), className)} {...props}>
                <dt className="col-start-1 inline-flex items-center gap-space-01 after:relative after:-start-1 after:-top-[0.5px] after:content-[':']">
                    {Icon && <Icon className="h-8 w-8 shrink-0" />}
                    {title}
                </dt>
                <dd>{children}</dd>
            </dl>
        )
    },
)
DescriptionItem.displayName = 'DescriptionItem'

export { Description, DescriptionItem }
