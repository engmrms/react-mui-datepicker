/* eslint-disable react/prop-types */
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'google-material-icons/filled'
import * as React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../Lib/utils'

const radioGroupVariants = cva(
    'flex aspect-square h-space-05 w-space-05 rounded-full active:data-[state=unchecked]:bg-control-pressed border border-control-border hover:bg-control-ripple-effect focus:ring-2 focus:ring-border-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-border-disabled disabled:data-[state=checked]:text-control-disabled',
    {
        variants: {
            colors: {
                primary: `data-[state=checked]:border-control-primary-checked data-[state=checked]:text-control-primary-checked
                hover:data-[state=checked]:border-control-primary-hovered hover:data-[state=checked]:text-control-primary-hovered
                active:data-[state=checked]:border-control-primary-pressed active:data-[state=checked]:text-control-primary-pressed
                `,
                neutral: `data-[state=checked]:border-control-neutral-checked data-[state=checked]:text-control-neutral-checked
                hover:data-[state=checked]:border-control-neutral-hovered hover:data-[state=checked]:text-control-neutral-hovered
                active:data-[state=checked]:border-control-neutral-pressed active:data-[state=checked]:text-control-neutral-pressed
                `,
            },
        },
        defaultVariants: {
            colors: 'primary',
        },
    },
)

const RadioGroupContext = React.createContext<VariantProps<typeof radioGroupVariants>>({
    colors: 'primary',
})

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & VariantProps<typeof radioGroupVariants>
>(({ className, colors, children, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref}>
            <RadioGroupContext.Provider value={{ colors }}> {children}</RadioGroupContext.Provider>
        </RadioGroupPrimitive.Root>
    )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext)

    return (
        <div className="flex size-space-06 items-center justify-center">
            <RadioGroupPrimitive.Item ref={ref} className={cn(radioGroupVariants({ colors: context.colors, className }))} {...props}>
                <RadioGroupPrimitive.Indicator className="flex h-full w-full items-center justify-center rounded-full">
                    <Circle className="h-[15px] w-[15px]" />
                </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
        </div>
    )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
