import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../Lib/utils'

const inputVariants = cva(
    'inline-flex items-center h-[4.8rem] w-full border px-space-04  text-base  hover:border-foreground disabled:cursor-not-allowed disabled:text-disabled aria-[invalid=true]:border-error',
    {
        variants: {
            variant: {
                default: 'bg-muted',
                outline: 'bg-transparent',
            },
            rounded: {
                default: 'rounded-2',
                full: 'rounded-4',
            },
            colors: {
                default: 'border-input',
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
                {startAdornment && <div className=" mr-space-02 ">{startAdornment}</div>}
                <input
                    type={type}
                    className="outline-none py-space-03 w-full bg-transparent file:border-0 file:bg-transparent  file:text-sm file:font-mdium placeholder:text-foreground-secondary  "
                    ref={ref}
                    {...props}
                />
                {endAdornment && <div className=" ml-space-02">{endAdornment}</div>}
            </div>
        )
    },
)
Input.displayName = 'Input'

export { Input }
