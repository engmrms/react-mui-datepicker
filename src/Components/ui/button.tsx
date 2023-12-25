import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center h-[4.8rem] text-base  font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none  disabled:bg-disabled disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                default: '',
                outline: 'border-2  border-current',
                ghost: ' border-none text',
                link: ' text-current underline-offset-4 hover:underline',
            },
            size: {
                default: 'py-space-03 px-space-05',
                sm: 'py-space-02 px-space-04',
                // lg: 'px-8',
                icon: 'p-space-03 ',
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
                className: 'text-secondary bg-transparent hover:text-secondary-foreground',
            },
            {
                colors: 'primary',
                variant: 'outline',
                className: 'text-primary bg-transparent hover:text-primary-foreground',
            },
            {
                variant: 'outline',
                colors: 'tertiary',
                className: 'text-tertiary bg-transparent hover:text-tertiary-foreground',
            },
            {
                variant: 'outline',
                colors: 'default',
                className: 'border-input',
            },
            {
                variant: 'outline',
                colors: 'info',
                className: 'text-info bg-transparent hover:text-info-foreground',
            },
            {
                variant: 'outline',
                colors: 'error',
                className: 'text-error bg-transparent hover:text-error-foreground',
            },
            {
                variant: 'outline',
                colors: 'warning',
                className: 'text-warning bg-transparent hover:text-warning-foreground',
            },
            {
                variant: 'outline',
                colors: 'success',
                className: 'text-success bg-transparent hover:text-success-foreground',
            },

            {
                variant: 'ghost',
                colors: 'secondary',
                className: 'text-secondary !bg-transparent',
            },
            {
                variant: 'ghost',
                colors: 'tertiary',
                className: 'text-tertiary !bg-transparent',
            },
            {
                variant: 'ghost',
                colors: 'default',
                className: '!bg-transparent',
            },
            {
                variant: 'ghost',
                colors: 'primary',
                className: 'text-primary !bg-transparent',
            },
            {
                variant: 'ghost',
                colors: 'info',
                className: 'text-info !bg-transparent',
            },
            {
                variant: 'ghost',
                colors: 'error',
                className: 'text-error !bg-transparent',
            },
            {
                variant: 'ghost',
                colors: 'success',
                className: 'text-success !bg-transparent',
            },
            {
                variant: 'ghost',
                colors: 'warning',
                className: 'text-warning !bg-transparent',
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
