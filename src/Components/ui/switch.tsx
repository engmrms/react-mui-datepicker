/* eslint-disable react/prop-types */
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(
    ({ className, ...props }, ref) => (
        <SwitchPrimitives.Root
            className={cn(
                'peer inline-flex h-space-05 border-transparent border hover:border-primary w-16 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-disabled data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-300',
                className,
            )}
            {...props}
            ref={ref}>
            <SwitchPrimitives.Thumb
                className={cn(
                    'pointer-events-none data-[state=checked]:text-primary text-xs flex items-center justify-center h-8 w-8 rounded-full bg-card shadow-lg ring-0 transition-transform ltr:data-[state=checked]:translate-x-7 data-[state=checked]:-translate-x-7 data-[state=unchecked]:translate-x-0',
                )}>
                {props?.checked && '✓'}
            </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>
    ),
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
