/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const toggleVariants = cva(
    `group inline-flex items-center justify-center rounded-full font-medium ring-offset-background transition-colors
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:bg-transparent  disabled:text-disabled disabled:border-disabled disabled:pointer-events-none disabld:data-[state=on]:bg-disabled
     `,
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                outline: 'border border-input bg-transparent ',
            },
            size: {
                default: 'px-space-04 py-space-02 h-[4rem] text-body-02',
                sm: 'px-space-03 py-[6px] h-[3.2rem] text-body-01',
                icon: 'p-space-03',
                fit: '',
            },
            colors: {
                default:
                    'hover:bg-card-hover  data-[state=on]:bg-primary data-[state=on]:text-primary-foreground  hover:data-[state=on]:bg-primary-dark',
                gray: 'hover:bg-card-hover hover:text-card-foreground data-[state=on]:bg-inverted data-[state=on]:text-inverted-foreground  hover:data-[state=on]:bg-foreground-secondary',
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
