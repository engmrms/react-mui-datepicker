/* eslint-disable react/prop-types */
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../Lib/utils'

const checkBoxVariants = cva(
    `flex aspect-square justify-center items-center data-[state=checked]:text-icon-oncolor enabled:active:data-[state=unchecked]:bg-control-pressed border border-control-border enabled:hover:bg-control-ripple-effect enabled:focus:ring-2 enabled:focus:ring-border-black enabled:focus:ring-offset-2 disabled:cursor-not-allowed
    disabled:border-border-disabled disabled:data-[state=checked]:text-control-disabled disabled:data-[state=checked]:border-none disabled:bg-disabled-background-disabled
     `,
    {
        variants: {
            colors: {
                primary: `data-[state=checked]:border-control-primary-checked data-[state=indeterminate]:border-control-primary-checked  data-[state=checked]:bg-control-primary-checked data-[state=indeterminate]:bg-control-primary-checked
                enabled:hover:data-[state=checked]:border-control-primary-hovered enabled:hover:data-[state=checked]:bg-control-primary-hovered enabled:hover:data-[state=indeterminate]:border-control-primary-hovered enabled:hover:data-[state=indeterminate]:bg-control-primary-hovered
                enabled:active:data-[state=checked]:border-control-primary-pressed enabled:active:data-[state=checked]:bg-control-primary-pressed enabled:active:data-[state=indeterminate]:border-control-primary-pressed enabled:active:data-[state=indeterminate]:bg-control-primary-pressed
                `,
                neutral: `data-[state=checked]:border-control-neutral-checked data-[state=checked]:bg-control-neutral-checked data-[state=indeterminate]:border-control-neutral-checked data-[state=indeterminate]:bg-control-neutral-checked
                enabled:hover:data-[state=checked]:border-control-neutral-hovered enabled:hover:data-[state=checked]:bg-control-neutral-hovered enabled:hover:data-[state=indeterminate]:border-control-neutral-hovered enabled:hover:data-[state=indeterminate]:bg-control-neutral-hovered
                enabled:active:data-[state=checked]:border-control-neutral-pressed enabled:active:data-[state=checked]:bg-control-neutral-pressed enabled:active:data-[state=indeterminate]:border-control-neutral-pressed enabled:active:data-[state=indeterminate]:bg-control-neutral-pressed
                `,
            },
            size: {
                default: 'h-space-05 w-space-05 [&>span>svg]:size-space-05',
                sm: 'h-[20px] w-[20px] [&>span>svg]:size-[20px]',
                xs: 'h-space-04 w-space-04 [&>span>svg]:size-space-04',
            },
        },
        defaultVariants: {
            colors: 'primary',
            size: 'default',
        },
    },
)

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkBoxVariants>
>(({ className, colors, checked, size, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} checked={checked} className={cn(checkBoxVariants({ colors, size, className }))} {...props}>
        <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current  ')}>
            {checked === 'indeterminate' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 12C6 11.1716 6.67157 10.5 7.5 10.5H16.5C17.3284 10.5 18 11.1716 18 12C18 12.8284 17.3284 13.5 16.5 13.5H7.5C6.67157 13.5 6 12.8284 6 12Z"
                        fill="white"
                    />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5945 7.53531C18.1352 8.07604 18.1352 8.95274 17.5945 9.49347L11.2483 15.8397C10.9886 16.0994 10.6365 16.2452 10.2692 16.2452C9.90201 16.2452 9.54983 16.0994 9.29016 15.8397L6.40554 12.955C5.86482 12.4143 5.86482 11.5376 6.40554 10.9969C6.94627 10.4562 7.82296 10.4562 8.36369 10.9969L10.2692 12.9025L15.6363 7.53531C16.177 6.99458 17.0537 6.99458 17.5945 7.53531Z"
                        fill="white"
                    />
                </svg>
            )}
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
