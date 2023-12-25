import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(
    ({ className, ...props }, ref) => (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                `peer h-[1.6rem] w-[1.6rem] shrink-0 rounded-[2px] border-[1.5px] border-input hover:border-primary hover:bg-primary-container ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed
                disabled:bg-disabled disabled:border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground`,
                className,
            )}
            {...props}>
            <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center  text-current disabled:text-gray-600/30')}>
                <Check className="h-5 w-5" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    ),
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
