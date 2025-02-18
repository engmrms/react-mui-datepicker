import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../Lib/utils'

const inputVariants = cva(
    `relative inline-flex items-center h-[4rem] w-full border px-space-04  text-base  hover:border-form-field-border-hovered disabled:cursor-not-allowed disabled:text-disabled
      aria-[invalid=true]:border-form-field-border-error after:bg-form-field-border-error
     after:absolute after:bottom-0 after:w-0 after:h-[2px] after:-translate-x-1/2 after:start-1/2 after:bg-form-field-border-pressed after:ease-in-out after:transition-all focus-within:after:w-full
    `,
    {
        variants: {
            variant: {
                default: 'bg-muted',
                outline: 'bg-transparent',
            },
            rounded: {
                default: 'rounded-0',
                full: 'rounded-4',
            },
            colors: {
                default: 'border-form-field-border-default',
                success: 'border-success',
                destructive: 'border-error',
            },
        },
        defaultVariants: {
            variant: 'default',
            rounded: 'default',
            colors: 'default',
        },
    },
)

interface Extra {
    startAdornment?: React.ReactNode | string
    endAdornment?: React.ReactNode | string
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants>, Extra {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, rounded, type, colors, startAdornment, endAdornment, ...props }, ref) => {
        return (
            <div className={cn(inputVariants({ variant, rounded, colors }), className)} aria-invalid={props['aria-invalid']}>
                {startAdornment && <div className=" me-space-02 ">{startAdornment}</div>}
                <input
                    type={type}
                    className="file:font-mdium w-full bg-transparent py-space-03 outline-none file:border-0  file:bg-transparent file:text-sm placeholder:text-foreground-secondary  "
                    ref={ref}
                    {...props}
                />
                {endAdornment && <div className="ms-space-02">{endAdornment}</div>}
            </div>
        )
    },
)
Input.displayName = 'Input'

export { Input }
