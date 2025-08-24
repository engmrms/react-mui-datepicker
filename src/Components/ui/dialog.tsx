/* eslint-disable react/prop-types */
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Close } from 'google-material-icons/outlined'
import * as React from 'react'

import clsx from 'clsx'
import { cn } from '../../Lib/utils'
import { useLanguage } from '../../package'
import { Button } from './button'
import { ScrollArea, ScrollBar } from './scroll-area'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 bg-background-overlay backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className,
        )}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
        ignoreInteractOutside?: boolean
        hideOverlay?: boolean
        overlayClassName?: string
    }
>(({ className, ignoreInteractOutside, hideOverlay, overlayClassName, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay
            className={clsx(overlayClassName, {
                'bg-transparent': hideOverlay,
            })}
        />
        <DialogPrimitive.Content
            onInteractOutside={e => {
                ignoreInteractOutside && e.preventDefault()
            }}
            ref={ref}
            className={cn(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-4  border bg-card   shadow-lg duration-200  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:w-full md:max-w-screen-sm xl:max-w-screen-lg xl:max-w-screen-lg',
                className,
            )}
            {...props}>
            {children}
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('flex  flex-row items-center border-b border-border-primary p-space-04  ', className)} {...props}>
        {props.children}
        <DialogClose className="ms-auto p-space-01" data-testid="sheetClose" asChild>
            <Button variant={'text'} colors={'neutral'} size={'icon-sm'}>
                <Close size={20} />
            </Button>
        </DialogClose>
    </div>
)
DialogHeader.displayName = 'DialogHeader'

const DialogBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const { dir } = useLanguage()
    return (
        <ScrollArea dir={dir} className="max-h-[calc(100vh_-_300px)] ">
            <div
                ref={ref}
                className={cn(
                    // 'scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2.5 scrollbar-h-2.5 scrollbar scrollbar-track-transparent scrollbar-thumb-border',
                    '  my-space-05 overflow-auto px-space-05 text-foreground',
                    // `${isFooterUsed ? 'mb-space-11' : ''}`,
                    className,
                )}
                {...props}
            />
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
})
DialogBody.displayName = 'DialogBody'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('flex flex-col gap-space-02 border-t border-border-primary p-space-04 sm:flex-row sm:justify-between', className)}
        {...props}
    />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
    ({ className, ...props }, ref) => (
        <DialogPrimitive.Title ref={ref} className={cn('text-body-01 font-semibold text-card-foreground', className)} {...props} />
    ),
)
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />)
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
    Dialog,
    DialogBody,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
}
