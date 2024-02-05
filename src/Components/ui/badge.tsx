/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const badgeVariants = cva(
    'inline-flex items-center  font-IBMBold  transition-colors text-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',

    {
        variants: {
            variant: {
                default: 'border-none',
                ghost: 'border-none',
                outline: 'border border-current text-foreground',
            },
            size: {
                default: 'py-space-02 px-space-04  text-body-02',
                sm: 'py-space-01 px-space-02   text-caption-01 ',
            },
            rounded: {
                default: 'rounded-1',
                full: 'rounded-full',
            },
            colors: {
                default: 'bg-foreground text-primary-foreground ',
                primary: 'bg-primary text-primary-foreground',
                secondary: 'bg-secondary text-secondary-foreground ',
                tertiary: 'bg-tertiary text-tertiary-foreground ',
                error: 'bg-error text-error-foreground ',
                warning: 'bg-warning text-warning-foreground ',
                info: 'bg-info text-info-foreground',
                gray: 'bg-card-foreground text-primary-foreground',
            },

            disabled: {
                true: 'bg-disabled text-white',
            },
        },
        compoundVariants: [
            {
                colors: 'secondary',
                variant: 'outline',
                className: 'text-secondary bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'tertiary',
                className: 'text-tertiary bg-transparent ',
            },
            {
                variant: 'outline',
                colors: 'primary',
                className: 'text-primary bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'info',
                className: 'text-info bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'error',
                className: 'text-error bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'warning',
                className: 'text-warning bg-transparent ',
            },
            {
                variant: 'outline',
                colors: 'default',
                className: 'text-foreground bg-transparent ',
            },
            {
                variant: 'outline',
                colors: 'gray',
                className: 'bg-transparent border-border text-card-foreground ',
            },

            {
                variant: 'ghost',
                colors: 'secondary',
                className: 'text-secondary-oncontainer bg-secondary-container',
            },
            {
                variant: 'ghost',
                colors: 'tertiary',
                className: 'text-tertiary-oncontainer bg-tertiary-container',
            },
            {
                variant: 'ghost',
                colors: 'primary',
                className: 'text-primary-oncontainer bg-primary-container',
            },
            {
                variant: 'ghost',
                colors: 'info',
                className: 'text-info-oncontainer bg-info-container',
            },
            {
                variant: 'ghost',
                colors: 'error',
                className: 'text-error-oncontainer bg-error-container',
            },
            {
                variant: 'ghost',
                colors: 'default',
                className: 'text-foreground bg-background-secondary',
            },
            {
                variant: 'ghost',
                colors: 'warning',
                className: 'text-warning-oncontainer bg-warning-container',
            },
            {
                variant: 'ghost',
                colors: 'gray',
                className: 'text-card-foreground bg-background-secondary',
            },
        ],
        defaultVariants: {
            variant: 'default',
            colors: 'default',
            rounded: 'default',
            size: 'default',
        },
    },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, rounded, colors, disabled, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant, rounded, disabled, colors, size }), className, '')} {...props} />
}

export { Badge, badgeVariants }
