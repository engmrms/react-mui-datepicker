/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const toggleVariants = cva(
    `inline-flex items-center justify-center rounded-full text-base font-normal ring-offset-background transition-colors hover:bg-card-hover hover:text-primary
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:bg-transparent  disabled:text-disabled disabled:border-disabled disabled:pointer-events-none disabld:data-[state=on]:bg-disabled
    data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:font-IBMBold  hover:data-[state=on]:bg-primary-dark `,
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                outline: 'border border-input bg-transparent ',
            },
            size: {
                default: 'px-space-05 py-space-03',
                sm: 'px-space-04 py-space-02',
                lg: 'h-11 px-5',
            },
        },

        defaultVariants: {
            variant: 'default',
            size: 'default',
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
