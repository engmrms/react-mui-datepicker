/* eslint-disable react/prop-types */
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(
    ({ className, ...props }, ref) => (
        <SwitchPrimitives.Root
            className={cn(
                'peer inline-flex h-space-05 w-16 shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:border-border disabled:!bg-disabled data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-300 hover:data-[state=checked]:bg-primary-dark hover:data-[state=unchecked]:bg-primary-container ',
                className,
            )}
            {...props}
            ref={ref}>
            <SwitchPrimitives.Thumb
                className={cn(
                    'pointer-events-none flex h-8 w-8 items-center justify-center rounded-full bg-card text-xs shadow-lg ring-0 transition-transform data-[state=checked]:-translate-x-7 data-[state=unchecked]:translate-x-0 data-[state=checked]:text-primary ltr:data-[state=checked]:translate-x-7',
                )}>
                {props?.checked && '✓'}
            </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>
    ),
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
