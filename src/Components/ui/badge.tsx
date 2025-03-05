/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const badgeVariants = cva(
    'inline-flex items-center gap-space-01  font-medium  transition-colors text-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',

    {
        variants: {
            variant: {
                default: 'border-none',
                ghost: 'border border-solid',
                outline: 'border border-current',
            },
            size: {
                default: 'py-space-01 px-space-03 h-[32px] text-body-01 [&>svg]:size-[18px]',
                sm: 'py-space-01 px-space-02   h-[24px]  text-caption-01 [&>svg]:size-[14px]',
                xs: 'py-space-01 px-space-02  h-[20px] text-caption-02 [&>svg]:size-[10px]',
            },
            rounded: {
                default: 'rounded-0',
                full: 'rounded-full',
            },
            colors: {
                primary: 'bg-tag-background-primary text-text-oncolor-primary',
                secondary: 'bg-tag-background-secondary text-text-oncolor-primary',
                tertiary: 'bg-tag-background-tertiary text-text-oncolor-primary',
                error: 'bg-tag-background-error text-text-oncolor-primary',
                warning: 'bg-tag-background-warning text-text-oncolor-primary',
                info: 'bg-tag-background-info text-text-oncolor-primary',
                gray: 'bg-tag-background-neutral text-text-oncolor-primary',
                success: 'bg-tag-background-success text-text-oncolor-primary',
            },

            disabled: {
                true: 'bg-disabled text-white',
            },
        },
        compoundVariants: [
            {
                colors: 'secondary',
                variant: 'outline',
                className: 'text-tag-text-secondary border-tag-border-secondary bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'tertiary',
                className: 'text-tag-text-tertiary border-tag-border-tertiary bg-transparent ',
            },
            {
                variant: 'outline',
                colors: 'primary',
                className: 'text-tag-text-primary border-tag-border-primary bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'info',
                className: 'text-tag-text-info border-tag-border-info bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'error',
                className: 'text-tag-text-error border-tag-border-error bg-transparent',
            },
            {
                variant: 'outline',
                colors: 'warning',
                className: 'text-tag-text-warning border-tag-border-warning bg-transparent ',
            },
            {
                variant: 'outline',
                colors: 'gray',
                className: 'bg-transparent text-tag-text-neutral border-tag-border-neutral ',
            },
            {
                variant: 'outline',
                colors: 'success',
                className: 'bg-transparent text-tag-text-success border-tag-border-success ',
            },

            {
                variant: 'ghost',
                colors: 'secondary',
                className: 'text-tag-text-secondary bg-tag-background-secondary-light border-tag-border-secondary-light',
            },
            {
                variant: 'ghost',
                colors: 'tertiary',
                className: 'text-tag-text-tertiary bg-tag-background-tertiary-light border-tag-border-tertiary-light',
            },
            {
                variant: 'ghost',
                colors: 'primary',
                className: 'text-tag-text-primary bg-tag-background-primary-light border-tag-border-primary-light',
            },
            {
                variant: 'ghost',
                colors: 'info',
                className: 'text-tag-text-info bg-tag-background-info-light border-tag-border-info-light',
            },
            {
                variant: 'ghost',
                colors: 'error',
                className: 'text-tag-text-error bg-tag-background-error-light border-tag-border-error-light',
            },

            {
                variant: 'ghost',
                colors: 'warning',
                className: 'text-tag-text-warning bg-tag-background-warning-light border-tag-border-warning-light',
            },
            {
                variant: 'ghost',
                colors: 'gray',
                className: 'text-tag-text-neutral bg-tag-background-neutral-light border-border-neutral-secondary',
            },
            {
                variant: 'ghost',
                colors: 'success',
                className: 'text-tag-text-success bg-tag-background-success-light border-tag-border-success-light',
            },
        ],
        defaultVariants: {
            variant: 'default',
            colors: 'primary',
            rounded: 'default',
            size: 'xs',
        },
    },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, rounded, colors, disabled, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant, rounded, disabled, colors, size }), className, '')} {...props} />
}

export { Badge, badgeVariants }
