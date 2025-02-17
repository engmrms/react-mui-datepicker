/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const toggleVariants = cva(
    `group inline-flex items-center justify-center gap-space-01 rounded-full transition-colors
     disabled:text-disabled-text-default-disabled  disabled:pointer-events-none disabled:cursor-not-allowed
     `,
    {
        variants: {
            variant: {
                default: '',
                outline:
                    'border border-border-neutral-primary disabled:border-disabled disabled:data-[state=on]:bg-disabled-background-disabled disabled:data-[state=on]:border-none',
            },
            size: {
                default: 'px-space-04 py-space-02 h-[4rem] text-body-02',
                sm: 'px-space-03 py-[6px] h-[3.2rem] text-body-01',
                icon: 'p-space-03',
                fit: '',
            },
            colors: {
                default:
                    'hover:bg-button-background-primary-light-hovered hover:text-text-primary  enabled:data-[state=on]:bg-button-background-primary data-[state=on]:text-text-oncolor-primary  hover:data-[state=on]:bg-button-background-primary-hovered hover:data-[state=on]:text-text-oncolor-primary',
                gray: 'hover:bg-button-background-black-light-hovered hover:text-text-black  enabled:data-[state=on]:bg-button-background-black data-[state=on]:text-text-oncolor-primary  hover:data-[state=on]:bg-button-background-black-hovered hover:data-[state=on]:text-text-oncolor-primary',
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
