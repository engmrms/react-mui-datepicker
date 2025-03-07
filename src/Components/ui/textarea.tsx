import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../Lib/utils'
import ShouldRender from '../ShouldRender'
import { useFormContext } from '../ui/form'

const textAreaVariants = cva(
    `flex relative overflow-hidden min-h-[10rem] w-full   ps-space-04 text-body-02 overflow-hidden text-form-field-text-filled
     aria-[disabled=true]:cursor-not-allowed aria-[disabled=true]:text-disabled-text-default-disabled
     aria-[invalid=true]:border-form-field-border-error  focus-within:aria-[invalid=true]:after:bg-form-field-border-error focus-within:shadow-md
     after:absolute after:bottom-0 after:w-0 after:h-[2px] ltr:after:-translate-x-1/2 rtl:after:translate-x-1/2 after:start-1/2 after:bg-form-field-border-pressed after:ease-in-out after:transition-all focus-within:after:w-full
    `,
    {
        variants: {
            variant: {
                default: 'bg-form-field-background-darker  hover:aria-[disabled=false]:border-form-field-border-default',
                outline:
                    'bg-form-field-background-default aria-[disabled=false]:hover:border-form-field-border-hovered border border-form-field-border-default aria-[disabled=true]:border-border-disabled',
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
        },
        defaultVariants: {
            variant: 'outline',
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
    ({ className, variant, rounded, startAdornment, colors, endAdornment, maxLength, ...props }, ref) => {
        const methods = useFormContext()

        return (
            <div className="relative flex flex-col gap-space-01">
                <div
                    className={cn(textAreaVariants({ variant, rounded, colors }), className)}
                    aria-invalid={props['aria-invalid']}
                    aria-disabled={props.disabled}>
                    {startAdornment && <div className="mr-space-02 mt-space-04 h-[2rem] w-[2rem] ">{startAdornment}</div>}
                    <textarea
                        className="placeholder:text-form-field-text-placeholder w-full resize-none bg-transparent py-space-02 outline-none"
                        ref={ref}
                        maxLength={maxLength}
                        {...props}
                    />
                    {endAdornment && <div className="ml-space-02 h-[2rem] w-[2rem]">{endAdornment}</div>}
                </div>
                <ShouldRender shouldRender={!!props?.name && !!methods && !!maxLength}>
                    <span className="absolute -bottom-[20px] end-0 flex flex-row-reverse text-caption-01 text-foreground">
                        <span className="text-foreground-secondary"> {maxLength}</span>/<span>{methods?.watch(String(props?.name))?.length}</span>
                    </span>
                </ShouldRender>
            </div>
        )
    },
)
Textarea.displayName = 'Textarea'

export { Textarea }
