/* eslint-disable react/prop-types */
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'google-material-icons/filled'
import * as React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../Lib/utils'

const radioGroupVariants = cva(
    'flex aspect-square   rounded-full enabled:active:data-[state=unchecked]:bg-control-pressed border border-control-border enabled:hover:bg-control-ripple-effect focus:ring-2 focus:ring-border-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-border-disabled disabled:data-[state=checked]:text-control-disabled',
    {
        variants: {
            colors: {
                primary: `data-[state=checked]:border-control-primary-checked data-[state=checked]:text-control-primary-checked
                enabled:hover:data-[state=checked]:border-control-primary-hovered enabled:hover:data-[state=checked]:text-control-primary-hovered
                enabled:active:data-[state=checked]:border-control-primary-pressed active:data-[state=checked]:text-control-primary-pressed
                `,
                neutral: `data-[state=checked]:border-control-neutral-checked data-[state=checked]:text-control-neutral-checked
                enabled:hover:data-[state=checked]:border-control-neutral-hovered enabled:hover:data-[state=checked]:text-control-neutral-hovered
                enabled:active:data-[state=checked]:border-control-neutral-pressed enabled:active:data-[state=checked]:text-control-neutral-pressed
                `,
            },
            size: {
                default: 'h-space-05 w-space-05 [&>span>svg]:size-space-04',
                sm: 'h-[20px] w-[20px] [&>span>svg]:size-[14px]',
                xs: 'h-space-04 w-space-04 [&>span>svg]:size-space-03',
            },
        },
        defaultVariants: {
            colors: 'primary',
            size: 'default',
        },
    },
)

const RadioGroupContext = React.createContext<VariantProps<typeof radioGroupVariants>>({
    colors: 'primary',
})

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & VariantProps<typeof radioGroupVariants>
>(({ className, colors, size, children, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref}>
            <RadioGroupContext.Provider value={{ colors, size }}> {children}</RadioGroupContext.Provider>
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
        <div className="flex  items-center justify-center">
            <RadioGroupPrimitive.Item
                ref={ref}
                className={cn(radioGroupVariants({ colors: context.colors, size: context.size, className }))}
                {...props}>
                <RadioGroupPrimitive.Indicator className="flex h-full w-full items-center justify-center rounded-full">
                    <Circle />
                </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
        </div>
    )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
