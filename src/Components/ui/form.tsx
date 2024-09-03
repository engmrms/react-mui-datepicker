/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    FormProviderProps,
    SubmitHandler,
    UseFormReturn,
    useForm,
    useFormContext,
    useFormState,
    useWatch,
    useFieldArray,
    useController,
} from 'react-hook-form'

import { Label } from '../../Components/ui/label'
import { cn } from '../../Lib/utils'

const Form = <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues = TFieldValues>(
    props: FormProviderProps<TFieldValues, TContext, TTransformedValues> & { formId?: string },
) => {
    return <FormProvider {...props} />
}

type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext)
    const itemContext = React.useContext(FormItemContext)
    const { getFieldState, formState, formId } = useFormContext() as UseFormReturn<FieldValues, any, FieldValues> & { formId?: string }

    const fieldState = getFieldState(fieldContext.name, formState)

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>')
    }

    const { id } = itemContext
    const newId = formId ? `${formId}-${fieldContext.name}` : id

    return {
        newId,
        name: fieldContext.name,
        formItemId: formId ? newId : `${id}-form-item`,
        formDescriptionId: `${formId ? newId : id}-form-item-description`,
        formMessageId: `${formId ? newId : id}-form-item-message`,
        ...fieldState,
    }
}

type FormItemContextValue = {
    id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const id = React.useId()

    return (
        <FormItemContext.Provider value={{ id }}>
            <div ref={ref} className={cn(className)} {...props} />
        </FormItemContext.Provider>
    )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
    ({ className, ...props }, ref) => {
        const { formItemId } = useFormField()

        return <Label ref={ref} className={cn('mb-space-02 block', className)} htmlFor={formItemId} {...props} />
    },
)
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
        <Slot
            ref={ref}
            id={formItemId}
            aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
            aria-invalid={!!error}
            {...props}
        />
    )
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField()

    return <p ref={ref} id={formDescriptionId} className={cn('text-sm text-muted-foreground', className)} {...props} />
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message) : children

    if (!body) {
        return null
    }

    return (
        <p ref={ref} id={formMessageId} className={cn('mt-space-01 font-IBMBold text-xs leading-[1.8rem] text-error', className)} {...props}>
            {body}
        </p>
    )
})
FormMessage.displayName = 'FormMessage'

export {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useForm,
    useFormContext,
    useFormField,
    useFormState,
    useWatch,
    useFieldArray,
    useController,
}
export type { SubmitHandler, UseFormReturn, FieldValues }
