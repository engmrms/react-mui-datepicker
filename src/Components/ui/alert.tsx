import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const alertVariants = cva(
    'relative w-full rounded-2 border p-space-03 [&>svg~*]:pr-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:right-[1.2rem] [&>svg]:top-[1.2rem] [&>svg]:text-foreground [&>svg]:w-8 [&>svg]:h-8',
    {
        variants: {
            variant: {
                default: 'border-none',
                outline: 'border-current',
                ghost: 'border-none',
            },
            colors: {
                default: 'text-secondary-oncontainer bg-primary-container [&>svg]:text-primary-oncontainer',
                error: 'text-error-oncontainer bg-error-container [&>svg]:text-error-oncontainer',
                warning: 'text-warning-oncontainer bg-warning-container [&>svg]:text-warning-oncontainer',
                info: 'text-info-oncontainer bg-info-container [&>svg]:text-info-oncontainer',
                secondary: 'text-secondary-oncontainer bg-secondary-container [&>svg]:text-secondary-oncontainer',
            },
        },
        compoundVariants: [
            {
                variant: 'outline',
                colors: 'default',
                className: 'bg-transparent text-primary [&>svg]:text-primary',
            },
            {
                variant: 'outline',
                colors: 'error',
                className: 'bg-transparent text-error [&>svg]:text-error',
            },
            {
                variant: 'outline',
                colors: 'warning',
                className: 'bg-transparent text-warning [&>svg]:text-warning',
            },
            {
                variant: 'outline',
                colors: 'info',
                className: 'bg-transparent text-info [&>svg]:text-info',
            },
            {
                variant: 'outline',
                colors: 'secondary',
                className: 'bg-transparent text-secondary [&>svg]:text-secondary',
            },
        ],
        defaultVariants: {
            variant: 'default',
            colors: 'default',
        },
    },
)

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(
    ({ className, variant, colors, ...props }, ref) => (
        <div ref={ref} role="alert" className={cn(alertVariants({ variant, colors }), className)} {...props} />
    ),
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('font-semibold text-subtitle-01', className)} {...props} />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-body-01 [&_p]:leading-relaxed', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
