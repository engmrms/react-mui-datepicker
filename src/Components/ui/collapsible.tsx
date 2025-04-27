/* eslint-disable react/prop-types */
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import * as React from 'react'
import { cn } from '../../Lib/utils'

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = React.forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
        ref={ref}
        className={cn(
            'group hover:bg-button-background-neutral focus:border-2 focus:border-black active:bg-button-background-neutral-pressed',
            className,
        )}
        {...props}>
        {children}
    </CollapsiblePrimitive.Trigger>
))
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleContent, CollapsibleTrigger }
