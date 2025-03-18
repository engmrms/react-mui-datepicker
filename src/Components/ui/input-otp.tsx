/* eslint-disable react/prop-types */
import { OTPInput, SlotProps } from 'input-otp'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
    ({ className, ...props }, ref) => (
        <OTPInput ref={ref} containerClassName={cn('group flex items-center grow has-[:disabled]:text-disabled', className)} {...props} />
    ),
)
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex grow items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<React.ElementRef<'div'>, SlotProps & React.ComponentPropsWithoutRef<'div'>>(
    ({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'relative min-w-[48px] p-space-02 text-body-02',
                    'flex grow items-center justify-center',
                    'transition-all duration-300',
                    'border-y border-e border-input first:rounded-s first:border-s last:rounded-e group-has-[input[aria-invalid]]:border-error',
                    'group-has-[input[aria-invalid]]:border-error',
                    { 'border border-form-field-border-hovered': isActive },
                    className,
                )}>
                <div className="group-has-[input[aria-invalid]]:text-error group-has-[input[data-input-otp-placeholder-shown]]:text-foreground-secondary">
                    {char ?? props.placeholderChar}
                </div>
                {hasFakeCaret && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
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
