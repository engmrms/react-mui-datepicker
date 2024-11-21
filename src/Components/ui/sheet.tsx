/* eslint-disable react/prop-types */
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

import Close from 'google-material-icons/outlined/Close'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '../../Lib/utils'
import accessibilityTools from '../../Stores/accessibilityTools'

type SheetFooterContextType = {
    isFooterUsed: boolean
    setIsFooterUsed: Dispatch<SetStateAction<boolean>>
}

// Create the context with initial values
const SheetFooterContext = createContext<SheetFooterContextType>({
    isFooterUsed: false,
    setIsFooterUsed: () => {}, // Provide a default function to prevent undefined
})
const useSheetFooter = () => useContext(SheetFooterContext)

// Create the provider component
const SheetProvider = ({ children }: React.PropsWithChildren) => {
    const [isFooterUsed, setIsFooterUsed] = useState(false)

    return <SheetFooterContext.Provider value={{ isFooterUsed, setIsFooterUsed }}>{children}</SheetFooterContext.Provider>
}

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>(
    ({ className, ...props }, ref) => (
        <SheetPrimitive.Overlay
            className={cn(
                'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                className,
            )}
            {...props}
            ref={ref}
        />
    ),
)
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
    'flex flex-col data-[side=bottom]:max-md:h-[93%] sm:max-w-[60rem] md:rounded-tl-none md:rounded-tr-none fixed z-50 bg-background overflow-y-auto p-space-00 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
    {
        variants: {
            side: {
                top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
                bottom: 'inset-x-0 bottom-0 h-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
                left: 'inset-y-0 left-0 h-full w-3/4 border-r ltr:data-[state=closed]:slide-out-to-right data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left ltr:data-[state=open]:slide-in-from-right ',
                right: 'inset-y-0 right-0 h-full w-3/4  border-l ltr:data-[state=closed]:slide-out-to-left data-[state=closed]:slide-out-to-right ltr:data-[state=open]:slide-in-from-left data-[state=open]:slide-in-from-right ',
            },
        },
        defaultVariants: {
            side: 'right',
        },
    },
)

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
    ({ className, side, children, ...props }, ref) => {
        const isActive = accessibilityTools(state => state.isActive)
        const matches = useMediaQuery('(min-width: 600px)')

        return (
            <SheetProvider>
                <SheetPortal>
                    <SheetOverlay>
                        <SheetPrimitive.Content
                            ref={ref}
                            className={cn(sheetVariants({ side: side ? side : !matches ? 'bottom' : 'left' }), { grayscale: isActive }, className)}
                            data-side={side ? side : !matches ? 'bottom' : 'left'}
                            {...props}>
                            {children}
                            {/* <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                        </SheetPrimitive.Close> */}
                        </SheetPrimitive.Content>
                    </SheetOverlay>
                </SheetPortal>
            </SheetProvider>
        )
    },
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, title, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('flex flex-row items-center gap-space-02 px-space-05 py-space-04', className)} {...props}>
        {children}
        <h1 className="text-subtitle-02 font-bold">{title}</h1>
        <SheetClose className="mr-auto p-space-02" data-testid="sheetClose">
            <Close />
        </SheetClose>
    </div>
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const { setIsFooterUsed } = useSheetFooter()

    useEffect(() => {
        setIsFooterUsed(true)

        return () => setIsFooterUsed(false)
    }, [setIsFooterUsed])

    return (
        <div
            className={cn(
                'absolute bottom-0 left-0 z-20 mt-auto flex w-full flex-col-reverse bg-background p-space-04 sm:flex-row sm:justify-end sm:space-x-2 sm:p-space-05',
                className,
            )}
            {...props}
        />
    )
}
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>(
    ({ className, ...props }, ref) => <SheetPrimitive.Title ref={ref} className={cn('text-lg font-bold text-foreground', className)} {...props} />,
)
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => <SheetPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />)
SheetDescription.displayName = SheetPrimitive.Description.displayName

const SheetBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const { isFooterUsed } = useSheetFooter()

    return (
        <div
            ref={ref}
            className={cn(
                'scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-border scrollbar-track-transparent scrollbar-w-2.5 scrollbar-h-2.5',
                `${isFooterUsed ? 'mb-space-11' : ''} h-full overflow-auto rounded-4 bg-card p-space-05 text-foreground`,
                className,
            )}
            {...props}
        />
    )
})

SheetBody.displayName = 'SheetBody'

export {
    Sheet,
    SheetBody,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetOverlay,
    SheetPortal,
    SheetTitle,
    SheetTrigger,
    type SheetContentProps,
}
