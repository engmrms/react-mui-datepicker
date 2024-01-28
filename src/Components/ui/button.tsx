/* eslint-disable react-refresh/only-export-components */
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center h-[4.8rem] text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none  disabled:bg-disabled disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                default: 'font-IBMBold',
                outline: 'border border-input',
                ghost: ' border-none text',
                link: ' text-current underline-offset-4 hover:underline',
            },
            size: {
                default: 'py-space-03 px-space-05',
                sm: 'py-space-02 px-space-04',
                // lg: 'px-8',
                icon: 'md:p-space-03 px-space-02 py-space-03 ',
            },
            rounded: {
                default: 'rounded-2',
                full: 'rounded-full',
            },
            colors: {
                default: 'text-foreground hover:bg-card-hover hover:text-primary active:bg-card-hover active:text-primary-oncontainer',
                primary: 'bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-oncontainer',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-dark active:bg-secondary-oncontainer',
                tertiary: 'bg-tertiary text-tertiary-foreground hover:bg-tertiary-dark active:bg-tertiary-oncontainer',
                error: 'bg-error text-error-foreground hover:bg-error-dark active:bg-error-oncontainer',
                warning: 'bg-warning text-warning-foreground hover:bg-warning-dark active:bg-warning-oncontainer',
                success: 'bg-success text-success-foreground hover:bg-success-dark active:bg-success-oncontainer',
                info: 'bg-info text-info-foreground hover:bg-info-dark active:bg-info-oncontainer',
            },
        },
        compoundVariants: [
            {
                colors: 'secondary',
                variant: 'outline',
                className:
                    'text-secondary bg-transparent hover:text-secondary hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                colors: 'primary',
                variant: 'outline',
                className: 'text-primary bg-transparent hover:text-primary hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'tertiary',
                className:
                    'text-tertiary bg-transparent hover:text-tertiary  hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'default',
                className: 'border-input hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'info',
                className: 'text-info bg-transparent hover:text-info hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'error',
                className: 'text-error bg-transparent hover:text-error hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'warning',
                className: 'text-warning bg-transparent hover:text-warning hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'success',
                className: 'text-success bg-transparent hover:text-success hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },

            {
                variant: 'ghost',
                colors: 'secondary',
                className:
                    'text-secondary bg-transparent hover:bg-secondary-container active:bg-secondary-container active:text-secondary-oncontainer',
            },
            {
                variant: 'ghost',
                colors: 'tertiary',
                className: 'text-tertiary bg-transparent hover:bg-tertiary-container active:bg-tertiary-container active:text-tertiary-oncontainer',
            },
            {
                variant: 'ghost',
                colors: 'default',
                className: 'bg-transparent hover:bg-card-hover active:bg-card-hover active:text-primary-oncontainer',
            },
            {
                variant: 'ghost',
                colors: 'primary',
                className: 'text-primary bg-transparent hover:bg-primary-container active:bg-primary-container active:text-primary-oncontainer',
            },
            {
                variant: 'ghost',
                colors: 'info',
                className: 'text-info bg-transparent hover:bg-info-container active:bg-info-container active:text-info-oncontainer',
            },
            {
                variant: 'ghost',
                colors: 'error',
                className: 'text-error bg-transparent hover:bg-error-container active:bg-error-container active:text-error-oncontainer',
            },
            {
                variant: 'ghost',
                colors: 'success',
                className: 'text-success bg-transparent hover:bg-success-container active:bg-success-container active:text-success-oncontainer',
            },
            {
                variant: 'ghost',
                colors: 'warning',
                className: 'text-warning bg-transparent hover:bg-warning-container active:bg-warning-container active:text-warning-oncontainer',
            },
            {
                variant: 'link',
                colors: 'warning',
                className: 'text-warning !bg-transparent',
            },
            {
                variant: 'link',
                colors: 'info',
                className: 'text-info !bg-transparent',
            },
            {
                variant: 'link',
                colors: 'success',
                className: 'text-success !bg-transparent',
            },
            {
                variant: 'link',
                colors: 'error',
                className: 'text-error !bg-transparent',
            },
            {
                variant: 'link',
                colors: 'secondary',
                className: 'text-secondary !bg-transparent',
            },
            {
                variant: 'link',
                colors: 'default',
                className: 'text-primary !bg-transparent',
            },
            {
                variant: 'link',
                colors: 'tertiary',
                className: 'text-tertiary !bg-transparent',
            },
        ],
        defaultVariants: {
            variant: 'default',
            size: 'default',
            rounded: 'default',
            colors: 'default',
        },
    },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, rounded, colors, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, rounded, colors, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
