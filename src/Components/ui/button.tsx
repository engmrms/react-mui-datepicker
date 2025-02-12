/* eslint-disable react-refresh/only-export-components */
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const buttonVariants = cva(
    'inline-flex items-center gap-space-01 font-medium justify-center focus:outline-border-black focus:outline focus:outline-2 focus:outline-offset-1 transition-colors  disabled:pointer-events-none disabled:cursor-not-allowed ',
    {
        variants: {
            variant: {
                default: 'disabled:text-disabled-text-default-disabled disabled:bg-disabled-background-disabled ',
                outline:
                    'border  disabled:text-disabled-text-default-disabled  disabled:border-border-neutral-secondary focus:border-border-black  focus:outline-offset-0',
                ghost: 'border-none disabled:text-disabled ', //text
                link: 'text-current underline-offset-4 hover:underline ',
                text: 'border-none  disabled:text-disabled-text-default-disabled ',
            },
            size: {
                default: 'py-space-02 px-space-04 h-[40px] text-body-02 [&>svg]:size-space-05',
                sm: 'py-[6px] px-space-03 h-[32px] text-body-01 [&>svg]:size-[20px]',
                xs: 'py-space-01 px-space-02 h-space-05 text-caption-01 [&>svg]:size-space-04',

                // lg: 'px-8',
                icon: 'p-space-02 h-[40px] text-body-02 [&>svg]:size-space-05',
                'icon-sm': 'p-space-01 h-[32px] text-body-01 [&>svg]:size-[20px]',
            },
            rounded: {
                default: 'rounded-0',
                full: 'rounded-full',
            },
            colors: {
                primary:
                    'bg-button-background-primary text-text-oncolor-primary hover:bg-button-background-primary-hovered active:bg-button-background-primary-pressed focus:bg-button-background-primary-focused',
                error: 'bg-button-background-error text-text-oncolor-primary hover:bg-button-background-error-hovered active:bg-button-background-error-pressed focus:bg-button-background-error-focused',
                neutral:
                    'bg-button-background-black text-text-oncolor-primary hover:bg-button-background-black-hovered active:bg-button-background-black-pressed focus:bg-button-background-black-focused',
                oncolor:
                    'bg-button-background-oncolor text-text-default hover:bg-button-background-oncolor-hovered active:bg-button-background-oncolor-pressed focus:bg-button-background-oncolor-focused',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-dark active:bg-secondary-oncontainer',
                tertiary: 'bg-tertiary text-tertiary-foreground hover:bg-tertiary-dark active:bg-tertiary-oncontainer',
                warning: 'bg-warning text-warning-foreground hover:bg-warning-dark active:bg-warning-oncontainer',
                success: 'bg-success text-success-foreground hover:bg-success-dark active:bg-success-oncontainer',
                info: 'bg-info text-info-foreground hover:bg-info-dark active:bg-info-oncontainer',
                gray: 'bg-transparent text-background-foreground hover:bg-card-hover active:bg-card-hover active:text-primary-oncontainer',
            },
        },
        compoundVariants: [
            {
                colors: 'neutral',
                variant: 'outline',
                className:
                    'border-border-neutral-primary bg-transparent text-text-default  hover:bg-button-background-neutral-pressed active:bg-button-background-neutral-pressed focus:bg-transparent',
            },
            {
                colors: 'primary',
                variant: 'outline',
                className:
                    'border-border-primary-light bg-transparent text-text-primary  hover:bg-button-background-primary-light-hovered active:bg-button-background-primary-light-pressed focus:bg-transparent',
            },
            {
                colors: 'error',
                variant: 'outline',
                className:
                    'border-border-error-light bg-transparent text-text-error  hover:bg-button-background-error-secondary-hovered active:bg-button-background-error-secondary-pressed focus:bg-transparent',
            },
            {
                colors: 'oncolor',
                variant: 'outline',
                className:
                    'border-border-white-40 bg-transparent text-text-oncolor-primary  hover:bg-button-background-transparent-hovered  active:bg-button-background-transparent-pressed focus:bg-transparent focus:outline-border-white-40 focus:border-border-white-40 disabled:text-disabled-text-default-oncolor-disabled disabled:border-disabled-icon-default-oncolor-disabled',
            },
            {
                colors: 'secondary',
                variant: 'outline',
                className: 'text-secondary hover:text-secondary hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                colors: 'tertiary',
                variant: 'outline',
                className: 'text-tertiary hover:text-tertiary  hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                colors: 'info',
                variant: 'outline',
                className: 'text-info hover:text-info hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                colors: 'warning',
                variant: 'outline',
                className: 'text-warning hover:text-warning hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                colors: 'success',
                variant: 'outline',
                className: 'text-success hover:text-success hover:bg-card-hover active:text-primary-oncontainer active:bg-card-hover',
            },
            {
                colors: 'gray',
                variant: 'outline',
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
                colors: 'info',
                className: 'text-info  bg-transparent hover:bg-info-container active:bg-info-container active:text-info-oncontainer',
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
                variant: 'ghost',
                colors: 'primary',
                className:
                    'bg-button-background-primary-light   text-text-primary  hover:bg-button-background-primary-light-hovered active:bg-button-background-primary-light-pressed focus:bg-button-background-primary-light disabled:bg-transparent disabled:border disabled:border-solid disabled:border-disabled-text-default-disabled',
            },
            {
                variant: 'ghost',
                colors: 'error',
                className:
                    'bg-button-background-error-secondary   text-text-error  hover:bg-button-background-error-secondary-hovered active:bg-button-background-error-secondary-pressed focus:bg-button-background-error-secondary-focused disabled:bg-transparent disabled:border disabled:border-solid disabled:border-disabled-text-default-disabled',
            },
            {
                variant: 'ghost',
                colors: 'neutral',
                className:
                    'bg-button-background-neutral   text-text-default  hover:bg-button-background-neutral-hovered active:bg-button-background-neutral-pressed focus:bg-button-background-neutral disabled:bg-disabled-background-disabled',
            },
            {
                variant: 'ghost',
                colors: 'oncolor',
                className:
                    'bg-button-background-transparent-hovered   text-text-oncolor-primary  hover:bg-button-background-transparent-hovered active:bg-button-background-transparent-pressed focus:bg-button-background-transparent-hovered focus:border-icon-oncolor focus:outline-icon-oncolor disabled:bg-button-background-disabled-oncolor',
            },

            {
                variant: 'text',
                colors: 'secondary',
                className:
                    'text-secondary bg-transparent hover:bg-secondary-container active:bg-secondary-container active:text-secondary-oncontainer',
            },
            {
                variant: 'text',
                colors: 'tertiary',
                className: 'text-tertiary bg-transparent hover:bg-tertiary-container active:bg-tertiary-container active:text-tertiary-oncontainer',
            },
            {
                variant: 'text',
                colors: 'info',
                className: 'text-info  bg-transparent hover:bg-info-container active:bg-info-container active:text-info-oncontainer',
            },
            {
                variant: 'text',
                colors: 'success',
                className: 'text-success bg-transparent hover:bg-success-container active:bg-success-container active:text-success-oncontainer',
            },
            {
                variant: 'text',
                colors: 'warning',
                className: 'text-warning bg-transparent hover:bg-warning-container active:bg-warning-container active:text-warning-oncontainer',
            },
            {
                variant: 'text',
                colors: 'primary',
                className:
                    'bg-transparent text-text-primary hover:bg-button-background-primary-light-hovered active:bg-button-background-primary-light-pressed focus:bg-transparent',
            },
            {
                variant: 'text',
                colors: 'error',
                className:
                    'bg-transparent text-text-error hover:bg-button-background-error-secondary-hovered active:bg-button-background-error-secondary-pressed focus:bg-transparent',
            },
            {
                variant: 'text',
                colors: 'neutral',
                className:
                    'bg-transparent text-text-default hover:bg-button-background-neutral-hovered active:bg-button-background-neutral-pressed focus:bg-transparent',
            },
            {
                variant: 'text',
                colors: 'oncolor',
                className:
                    'text-text-oncolor-primary bg-transparent hover:bg-button-background-transparent-hovered active:bg-button-background-transparent-pressed  focus:bg-transparent focus:border-white focus:outline-white disabled:text-disabled-text-default-oncolor-disabled',
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
                colors: 'primary',
                className: 'text-link !bg-transparent',
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
            colors: 'primary',
        },
    },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, rounded, colors, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn('text-link ', buttonVariants({ variant, size, rounded, colors, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
