import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & {
        variant?: 'default' | 'inverted'
    }
>(({ className, align = 'center', variant, sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
            `z-50  flex max-w-96 origin-[--radix-hover-card-content-transform-origin] flex-col gap-space-02 text-wrap rounded p-space-02  text-caption-01 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
            [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:start-space-02 [&>svg]:top-space-02 [&>svg]:size-[24px]  [&>svg]:rounded-full [&>svg]:bg-icon-neutral [&>svg]:p-space-01 [&>svg]:text-icon-oncolor [&>svg~*]:ps-[32px]
            `,
            {
                'bg-popover text-popover-foreground ': variant === 'default',
                'bg-background-neutral-800 text-neutral-100': variant === 'inverted',
            },
            className,
        )}
        {...props}
    />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

const HoverCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('font-semibold', className)} {...props} />
))
HoverCardTitle.displayName = 'HoverCardTitle'

const HoverCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(className)} {...props} />
))
HoverCardDescription.displayName = 'HoverCardDescription'

export { HoverCard, HoverCardContent, HoverCardDescription, HoverCardTitle, HoverCardTrigger }
