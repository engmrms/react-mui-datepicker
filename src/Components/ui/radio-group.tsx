/* eslint-disable react/prop-types */
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import Circle from 'google-material-icons/filled/Circle'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <div className="flex size-space-06 items-center justify-center">
            <RadioGroupPrimitive.Item
                ref={ref}
                className={cn(
                    `flex aspect-square h-[20px] w-[20ps] rounded-full border-2 border-primary ring-offset-background hover:border-primary-dark
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:border-disabled data-[state=checked]:text-primary
                hover:data-[state=checked]:text-primary-dark disabled:data-[state=checked]:text-disabled`,
                    className,
                )}
                {...props}>
                <RadioGroupPrimitive.Indicator className="flex h-full w-full items-center justify-center rounded-full">
                    <Circle className="h-[10px] w-[10px]" />
                </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
        </div>
    )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
