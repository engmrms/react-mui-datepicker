/* eslint-disable react/prop-types */
import { OTPInput, SlotProps } from 'input-otp'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
    ({ className, ...props }, ref) => (
        <OTPInput ref={ref} containerClassName={cn('group flex items-center has-[:disabled]:text-disabled', className)} {...props} />
    ),
)
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<React.ElementRef<'div'>, SlotProps & React.ComponentPropsWithoutRef<'div'>>(
    ({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'relative min-w-[48px] p-space-02 text-body-02',
                    'flex items-center justify-center',
                    'transition-all duration-300',
                    'border-y border-e border-border first:rounded-s-[4px] first:border-s last:rounded-e-[4px] group-has-[input[aria-invalid]]:border-error',
                    'group-focus-within:border-accent-foreground/20 group-hover:border-accent-foreground/20',
                    'outline outline-0 outline-accent-foreground/20 group-has-[input[aria-invalid]]:outline-error',
                    { 'outline-1 outline-foreground': isActive },
                    className,
                )}>
                <div className="group-has-[input[aria-invalid]]:text-error group-has-[input[data-input-otp-placeholder-shown]]:text-foreground-secondary">
                    {char ?? props.placeholderChar}
                </div>
                {hasFakeCaret && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                    </div>
                )}
            </div>
        )
    },
)
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
        <div className="flex size-space-05 items-center justify-center">
            <div className="size-space-01 rounded-full bg-foreground"></div>
        </div>
    </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
