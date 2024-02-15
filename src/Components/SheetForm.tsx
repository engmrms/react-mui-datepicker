/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import Close from 'google-material-icons/outlined/Close'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Button, ButtonProps } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from './ui/sheet'

const SheetForm = Sheet

const SheetFormTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
    <SheetTrigger asChild>
        <Button ref={ref} colors="primary" rounded="full" className="flex items-center gap-space-02" {...props} />
    </SheetTrigger>
))
SheetFormTrigger.displayName = 'SheetFormTrigger'

const SheetFormContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const matches = useMediaQuery('(min-width: 768px)')
    return (
        <SheetContent
            ref={ref}
            className="flex flex-col rounded-tl-4 rounded-tr-4 bg-card p-0 sm:max-w-[60rem] md:rounded-tl-none md:rounded-tr-none"
            side={!matches ? 'bottom' : 'left'}
            {...props}
        />
    )
})
SheetFormContent.displayName = 'SheetFormContent'

const SheetFormHeader = ({ className, title, ...props }: React.ComponentPropsWithoutRef<typeof SheetHeader>) => (
    <SheetHeader className="flex flex-row items-center justify-between border-b border-input px-space-05 py-space-04" {...props}>
        <h1 className="font-IBMBold text-subtitle-02">{title}</h1>
        <SheetClose>
            <Close />
        </SheetClose>
    </SheetHeader>
)
SheetFormHeader.displayName = 'SheetFormHeader'

const SheetFormFooter = ({ className, title, ...props }: React.ComponentPropsWithoutRef<typeof SheetFooter>) => (
    <SheetFooter className="mt-auto bg-background p-space-05" {...props} />
)

SheetFormFooter.displayName = 'SheetFormFooter'

const SheetFormBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className="p-space-05 text-foreground" {...props} />
))

SheetFormBody.displayName = 'SheetFormBody'

export { SheetForm, SheetFormBody, SheetFormContent, SheetFormFooter, SheetFormHeader, SheetFormTrigger }
