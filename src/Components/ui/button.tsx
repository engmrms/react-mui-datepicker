/* eslint-disable react-refresh/only-export-components */
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const buttonVariants = cva(
    'inline-flex items-center gap-space-01 font-medium justify-center  focus:outline-border-black   focus:outline focus:outline-2 focus:outline-offset-1 transition-colors  focus: disabled:pointer-events-none disabled:cursor-not-allowed ',
    {
        variants: {
            variant: {
                default: 'disabled:bg-disabled disabled:text-card  ',
                outline: 'border border-border-neutral-primary disabled:text-disabled !bg-card',
                ghost: ' border-none disabled:text-disabled ',
                link: ' text-current underline-offset-4 hover:underline ',
            },
            size: {
                default: 'py-space-02 px-space-04 h-[40px] text-body-02',
                sm: 'py-[6px] px-space-03 h-[32px] text-body-01',
                // lg: 'px-8',
                icon: 'p-space-02 h-[40px] text-body-02',
                'icon-sm': 'p-space-01 h-[32px] text-body-01',
            },
            rounded: {
                default: 'rounded-[4px]',
                full: 'rounded-full',
            },
            colors: {
                default: 'text-foreground hover:bg-card-hover hover:text-primary active:bg-card-hover active:text-primary-oncontainer',
                primary:
                    'bg-button-background-primary text-text-oncolor-primary hover:bg-button-background-primary-hovered active:bg-button-background-primary-pressed focus:bg-button-background-primary-focused',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-dark active:bg-secondary-oncontainer',
                tertiary: 'bg-tertiary text-tertiary-foreground hover:bg-tertiary-dark active:bg-tertiary-oncontainer',
                error: 'bg-button-background-error text-text-oncolor-primary hover:bg-button-background-error-hovered active:bg-button-background-error-pressed focus:bg-button-background-error-focused',
                warning: 'bg-warning text-warning-foreground hover:bg-warning-dark active:bg-warning-oncontainer',
                success: 'bg-success text-success-foreground hover:bg-success-dark active:bg-success-oncontainer',
                info: 'bg-info text-info-foreground hover:bg-info-dark active:bg-info-oncontainer',
                gray: 'bg-transparent text-background-foreground hover:bg-card-hover active:bg-card-hover active:text-primary-oncontainer',
                neutral:
                    'bg-button-background-black text-text-oncolor-primary hover:bg-button-background-black-hovered active:bg-button-background-black-pressed focus:bg-button-background-black-focused',
                oncolor:
                    'bg-button-background-oncolor text-text-default hover:bg-button-background-oncolor-hovered active:bg-button-background-oncolor-pressed focus:bg-button-background-oncolor-focused',
            },
        },
        compoundVariants: [
            {
                colors: 'secondary',
                variant: 'outline',
                className: 'text-secondary hover:text-secondary hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                colors: 'primary',
                variant: 'outline',
                className: 'text-primary hover:text-primary hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'tertiary',
                className: 'text-tertiary hover:text-tertiary  hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'default',
                className: 'border-input hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'info',
                className: 'text-info hover:text-info hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'error',
                className: 'text-error hover:text-error hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'warning',
                className: 'text-warning hover:text-warning hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'success',
                className: 'text-success hover:text-success hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                variant: 'outline',
                colors: 'gray',
                className: 'border-border hover:bg-card-hover active:bg-card-hover active:text-primary-oncontainer',
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
    return <Comp className={cn('text- bg-disabled', buttonVariants({ variant, size, rounded, colors, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
