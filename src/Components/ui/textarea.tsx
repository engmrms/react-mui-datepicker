import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../Lib/utils'

const textAreaVariants = cva(
    'flex min-h-[10rem] w-full border ps-space-04 text-base hover:border-foreground   disabled:cursor-not-allowed disabled:text-disabled aria-[invalid=true]:border-error',
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

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants>, Extra {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, rounded, startAdornment, colors, endAdornment, ...props }, ref) => {
        return (
            <div className={cn(textAreaVariants({ variant, rounded, colors }), className)} aria-invalid={props['aria-invalid']}>
                {startAdornment && <div className="mr-space-02 mt-space-04 h-[2rem] w-[2rem] ">{startAdornment}</div>}
                <textarea
                    className="w-full resize-none bg-transparent py-space-03 outline-none placeholder:text-foreground-secondary"
                    ref={ref}
                    {...props}
                />
                {endAdornment && <div className="ml-space-02 h-[2rem] w-[2rem]">{endAdornment}</div>}
            </div>
        )
    },
)
Textarea.displayName = 'Textarea'

export { Textarea }
