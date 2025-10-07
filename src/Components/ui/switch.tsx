/* eslint-disable react/prop-types */
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(
    ({ className, ...props }, ref) => (
        <SwitchPrimitives.Root
            className={cn(
                `group inline-flex h-space-05 w-16 shrink-0 cursor-pointer items-center rounded-full border border-control-neutral-checked  transition-colors data-[state=checked]:border-none data-[state=checked]:bg-control-primary-checked  data-[state=unchecked]:bg-transparent
                  hover:data-[state=unchecked]:border-control-neutral-hovered hover:data-[state=checked]:bg-control-primary-hovered
                  focus:ring-2 focus:ring-border-black focus:ring-offset-2
                  active:data-[state=unchecked]:border-control-neutral-pressed active:data-[state=checked]:bg-control-primary-pressed
                  disabled:cursor-not-allowed disabled:border-control-border-disabled disabled:data-[state=checked]:bg-control-disabled  `,
                className,
            )}
            {...props}
            ref={ref}>
            <SwitchPrimitives.Thumb
                className={cn(
                    `pointer-events-none relative flex h-space-04 w-space-04 items-center justify-center rounded-full bg-control-neutral-checked text-xs shadow-[0px_0px_1px_0px_rgba(34,35,35,0.20)] ring-0 transition-transform
                    data-[state=checked]:start-space-01 data-[state=checked]:-translate-x-space-04  data-[state=unchecked]:-translate-x-space-01
                    data-[state=checked]:bg-background-card data-[state=checked]:text-control-primary-checked
                    group-hover:data-[state=unchecked]:bg-control-neutral-hovered group-hover:data-[state=checked]:text-control-primary-hovered
                    group-hover:data-[state=checked]:text-control-primary-pressed group-active:data-[state=unchecked]:bg-control-neutral-pressed
                    group-disabled:data-[state=unchecked]:bg-control-disabled
                    ltr:data-[state=checked]:translate-x-space-04 ltr:data-[state=unchecked]:translate-x-space-01`,
                )}>
                {props?.checked && '✓'}
            </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>
    ),
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
