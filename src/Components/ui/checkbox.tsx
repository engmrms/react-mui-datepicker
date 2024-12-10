/* eslint-disable react/prop-types */
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'google-material-icons/filled'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(
    ({ className, ...props }, ref) => (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                `peer h-[1.8rem] w-[1.8rem] shrink-0 rounded-[2px] border-2 border-primary ring-offset-background data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:border-primary-dark hover:data-[state=checked]:border-primary-dark hover:data-[state=checked]:bg-primary-dark
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-disabled disabled:data-[state=checked]:border-none disabled:data-[state=checked]:bg-disabled`,
                className,
            )}
            {...props}>
            <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center  text-current  ')}>
                <Check className="h-6 w-6" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    ),
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
