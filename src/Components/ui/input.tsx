import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../Lib/utils'

const inputVariants = cva(
    `relative inline-flex items-center  w-full  px-space-04 text-form-field-text-filled   overflow-hidden
     aria-[disabled=true]:cursor-not-allowed aria-[disabled=true]:text-disabled-text-default-disabled
     aria-[invalid=true]:border-form-field-border-error focus-within:shadow-md  focus-within:aria-[invalid=true]:after:bg-form-field-border-error
     after:absolute after:bottom-0 after:w-0 after:h-[2px] ltr:after:-translate-x-1/2 rtl:after:translate-x-1/2 after:start-1/2 after:bg-form-field-border-pressed after:ease-in-out after:transition-all focus-within:after:w-full
    `,
    {
        variants: {
            variant: {
                default: 'bg-form-field-background-darker  hover:aria-[disabled=false]:border-form-field-border-default',
                outline: 'bg-form-field-background-default aria-[disabled=false]:hover:border-form-field-border-hovered border border-form-field-border-default aria-[disabled=true]:border-border-disabled',
                lighter: 'bg-form-field-background-lighter  aria-[disabled=false]:hover:border-form-field-border-default',
            },
            rounded: {
                default: 'rounded',
                full: 'rounded-4',
            },
            colors: {
                default: 'hover:aria-[disabled=false]:border',
                success: 'border-success',
                destructive: 'border-form-field-border-error ',
            },
            size: {
                default: '[&>input]:py-space-02 text-body-02 h-[40px]',
                sm: '[&>input]:py-space-01 text-body-01 h-[32px]',
            },
        },
        defaultVariants: {
            variant: 'outline',
            rounded: 'default',
            colors: 'default',
            size: 'default',
        },
    },
)

interface Extra {
    startAdornment?: React.ReactNode | string
    endAdornment?: React.ReactNode | string
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants>, Extra {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, rounded, type, colors, startAdornment, size, endAdornment, ...props }, ref) => {
        return (
            <div
                className={cn(inputVariants({ variant, rounded, colors, size }), className)}
                aria-invalid={props['aria-invalid']}
                aria-disabled={props.disabled}>
                {startAdornment && <div className=" me-space-02 ">{startAdornment}</div>}
                <input
                    type={type}
                    className="file:font-mdium placeholder:text-form-field-text-placeholder w-full  bg-transparent outline-none  file:border-0 file:bg-transparent file:text-sm  "
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
