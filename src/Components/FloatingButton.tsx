/* eslint-disable react-refresh/only-export-components */
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../Lib/utils'

const floatingButtonVariants = cva(
    'inline-flex items-center rounded-full gap-space-02 [&>svg]:size-space-05 font-medium text-body-02 justify-center focus:outline-border-black focus:outline focus:outline-2 focus:outline-offset-1 transition-colors  disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-disabled-text-default-disabled disabled:bg-disabled-background-disabled',
    {
        variants: {
            size: {
                default: 'p-[20px] ',
                sm: 'p-space-04',
            },

            colors: {
                primary:
                    'bg-button-background-primary text-icon-oncolor hover:bg-button-background-primary-hovered active:bg-button-background-primary-pressed focus:bg-button-background-primary-focused ',

                neutral:
                    'bg-button-background-black text-icon-oncolor hover:bg-button-background-black-hovered active:bg-button-background-black-pressed focus:bg-button-background-black-focused',
                oncolor:
                    'bg-button-background-oncolor text-icon-default hover:bg-button-background-oncolor-hovered active:bg-button-background-oncolor-pressed focus:bg-button-background-oncolor-focused disabled:text-disabled-icon-default-oncolor-disabled disabled:bg-button-background-disabled-oncolor',
                'Secondary-Solid':
                    'bg-button-background-neutral text-icon-default hover:bg-button-background-neutral-pressed active:bg-button-background-neutral-selected focus:bg-button-background-neutral-focused',
            },
        },

        defaultVariants: {
            size: 'default',
            colors: 'primary',
        },
    },
)

export interface FloatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof floatingButtonVariants> {
    asChild?: boolean
    position?: 'bottomRight' | 'bottomLeft'
}

const FloatingButton = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
    ({ className, size, colors, children, asChild = false, position, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        const ariaLabel = 'floating-button'

        const Component = (
            <div
                className={cn(
                    'fixed m-space-03 duration-300 animate-in slide-in-from-bottom-10',
                    position === 'bottomRight' ? 'bottom-0 end-0' : 'bottom-0 start-0',
                )}>
                <Comp className={cn(floatingButtonVariants({ size, colors, className }))} ref={ref} aria-label={ariaLabel} {...props}>
                    {children}
                </Comp>
            </div>
        )

        return Component
    },
)
FloatingButton.displayName = 'FloatingButton'

export { FloatingButton, floatingButtonVariants }
