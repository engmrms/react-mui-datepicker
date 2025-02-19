/* eslint-disable react/prop-types */
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { Close, Info } from 'google-material-icons/outlined'
import * as React from 'react'

import { cn } from '../../Lib/utils'
import { Button } from './button'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Viewport>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Viewport
        ref={ref}
        className={cn(
            'fixed bottom-space-05 z-[10000000000000] flex max-h-screen w-full flex-col p-4 sm:bottom-10 sm:top-auto lg:max-w-[500px]  ltr:sm:right-1/2 ltr:sm:translate-x-1/2 rtl:sm:left-1/2 rtl:sm:-translate-x-1/2',
            className,
        )}
        {...props}
    />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
    `group pointer-events-auto gap-space-03 relative bg-background-notification-white flex sm:flex-row w-full items-center space-x-4 overflow-hidden
     rounded-1 border border-border-primary  px-space-05 py-space-04 shadow-3xl transition-all data-[swipe=cancel]:translate-y-0 data-[swipe=end]:translate-y-[var(--radix-toast-swipe-end-x)]
     data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out
     data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full
     before:w-space-02 before:top-0 before:bottom-0 before:absolute before:start-0 before:opacity-70`,
    {
        variants: {
            variant: {
                default: 'before:bg-background-neutral-100',
                destructive: 'destructive group before:bg-background-error',
                success: 'success group before:bg-background-success',
                info: 'info group before:bg-background-info',
                warning: 'warning group before:bg-background-warning',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

const Toast = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
    return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>>(
    ({ className, ...props }, ref) => (
        <ToastPrimitives.Action
            ref={ref}
            className={cn(
                'inline-flex h-[32px] items-center justify-center gap-space-01 rounded-0 border-none bg-transparent px-space-03 py-[6px] text-body-01 font-medium text-text-default transition-colors hover:bg-button-background-neutral-hovered focus:bg-transparent focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-border-black active:bg-button-background-neutral-pressed disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-disabled-text-default-disabled [&>svg]:size-[20px]',
                className,
            )}
            {...props}
        />
    ),
)
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>>(
    ({ ...props }, ref) => (
        <ToastPrimitives.Close ref={ref} asChild toast-close="" {...props}>
            <Button variant={'text'} colors="neutral" size={'icon-sm'} rounded={'default'}>
                <Close />
            </Button>
        </ToastPrimitives.Close>
    ),
)
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>(
    ({ className, ...props }, ref) => (
        <ToastPrimitives.Title ref={ref} className={cn('text-body-02 font-semibold text-text-display', className)} {...props} />
    ),
)
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Description>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Description ref={ref} className={cn('content-center text-body-01 text-text-default', className)} {...props} />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

const ToastIcon = ({ icon }: { icon?: React.ReactNode }) => {
    return (
        <div
            className={`flex size-space-07 items-center justify-center rounded-full bg-background-neutral-50 p-[10px]
        group-[.destructive]:bg-icon-background-error-light  group-[.info]:bg-icon-background-info-light
        group-[.success]:bg-icon-background-success-light group-[.warning]:bg-icon-background-warning-light
        [&>svg]:size-[20px] [&>svg]:shrink-0
        group-[.destructive]:[&>svg]:fill-icon-error group-[.info]:[&>svg]:fill-icon-info
        group-[.success]:[&>svg]:fill-icon-success group-[.warning]:[&>svg]:fill-icon-warning
        `}>
            {icon || <Info />}
        </div>
    )
}
ToastIcon.displayName = 'ToastIcon'

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
    Toast,
    ToastAction,
    ToastClose,
    ToastDescription,
    ToastIcon,
    ToastProvider,
    ToastTitle,
    ToastViewport,
    type ToastActionElement,
    type ToastProps,
}
