/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const toggleVariants = cva(
    `group inline-flex items-center justify-center gap-space-01 rounded-full transition-colors text-text-default data-[state=on]:font-semibold
     disabled:text-disabled-text-default-disabled  disabled:pointer-events-none disabled:cursor-not-allowed focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-black
     `,
    {
        variants: {
            variant: {
                default: '',
                outline:
                    'border border-border-neutral-primary disabled:border-disabled disabled:data-[state=on]:bg-disabled-background-disabled disabled:data-[state=on]:border-none',
            },
            size: {
                default: 'px-space-04 py-space-02 h-[40px] text-body-02 font-medium [&>svg]:size-space-05',
                sm: 'px-space-03 py-space-01 h-[32px] text-body-01 [&>svg]:size-[20px]',
                xs: 'px-space-03 py-space-01  h-[24px] text-caption-01 [&>svg]:size-space-04',
                icon: 'p-space-02 size-[40px] [&>svg]:size-space-05',
                'icon-sm': 'p-space-02 size-[32px] [&>svg]:size-[20px]',
                'icon-xs': 'p-space-01 size-[24px] [&>svg]:size-space-04',
                fit: '',
            },
            colors: {
                default: `hover:bg-button-background-primary-light-hovered
                         hover:border-button-background-primary-light-hovered
                         hover:text-text-primary
                         active:text-text-primary
                         data-[state=on]:bg-button-background-primary
                         data-[state=on]:text-text-oncolor-primary
                         hover:data-[state=on]:bg-button-background-primary-hovered
                         hover:data-[state=on]:border-button-background-primary-hovered
                         hover:data-[state=on]:text-text-oncolor-primary
                         active:data-[state=on]:text-text-oncolor-primary
                         active:bg-button-background-primary-light-pressed
                         active:border-button-background-primary-light-pressed
                         active:data-[state=on]:bg-button-background-primary-pressed`,
                gray: `hover:bg-button-background-neutral-pressed
                       active:bg-button-background-neutral-selected
                       active:data-[state=on]:bg-button-background-black-pressed
                       data-[state=on]:bg-button-background-black
                       data-[state=on]:text-text-oncolor-primary
                       hover:data-[state=on]:bg-button-background-black-hovered
                       hover:data-[state=on]:text-text-oncolor-primary
                       `,
                oncolor: `border-border-white-40 text-text-oncolor-primary
                         hover:bg-button-background-transparent-hovered
                         active:bg-button-background-transparent-pressed
                         data-[state=on]:bg-button-background-oncolor
                         data-[state=on]:text-text-default
                         hover:data-[state=on]:bg-button-background-oncolor-hovered
                         active:data-[state=on]:bg-button-background-oncolor-pressed
                         disabled:text-disabled-text-default-oncolor-disabled
                         disabled:border-disabled-icon-default-oncolor-disabled
                         focus:data-[state=off]:outline-border-white-40
                         focus:-outline-offset-[3px]
                `,
            },
        },

        defaultVariants: {
            variant: 'default',
            size: 'default',
            colors: 'default',
        },
    },
)

const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
