/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import Close from 'google-material-icons/outlined/Close'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '../Lib/utils'
import { Button, ButtonProps } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from './ui/sheet'

const SheetForm = Sheet

const SheetFormTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
    <SheetTrigger asChild>
        <Button ref={ref} colors="primary" className={cn('flex items-center gap-space-02', className)} {...props} />
    </SheetTrigger>
))
SheetFormTrigger.displayName = 'SheetFormTrigger'

const SheetFormContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const matches = useMediaQuery('(min-width: 768px)')
    return (
        <SheetContent
            ref={ref}
            className={cn(
                'flex flex-col rounded-tl-4 rounded-tr-4 bg-card p-0 data-[side=bottom]:max-md:h-[93%] sm:max-w-[60rem] md:rounded-tl-none md:rounded-tr-none',
                className,
            )}
            side={!matches ? 'bottom' : 'left'}
            data-side={!matches ? 'bottom' : 'left'}
            {...props}
        />
    )
})
SheetFormContent.displayName = 'SheetFormContent'

const SheetFormHeader = ({ className, title, ...props }: React.ComponentPropsWithoutRef<typeof SheetHeader>) => (
    <SheetHeader className={cn('flex flex-row items-center justify-between border-b border-input px-space-05 py-space-04', className)} {...props}>
        <h1 className="font-bold text-subtitle-02">{title}</h1>
        <SheetClose>
            <Close />
        </SheetClose>
    </SheetHeader>
)
SheetFormHeader.displayName = 'SheetFormHeader'

const SheetFormFooter = ({ className, title, ...props }: React.ComponentPropsWithoutRef<typeof SheetFooter>) => (
    <SheetFooter className={cn('absolute bottom-0 left-0 mt-auto w-full bg-background p-space-05', className)} {...props} />
)

SheetFormFooter.displayName = 'SheetFormFooter'

const SheetFormBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-space-11 overflow-auto p-space-05 text-foreground', className)} {...props} />
))

SheetFormBody.displayName = 'SheetFormBody'

export { SheetForm, SheetFormBody, SheetFormContent, SheetFormFooter, SheetFormHeader, SheetFormTrigger }
