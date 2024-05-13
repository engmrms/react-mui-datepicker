/* eslint-disable react/prop-types */
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            'flex flex-col gap-space-03 border-b border-b-border px-space-02 py-space-04 data-[state=closed]:hover:bg-card-hover',
            className,
        )}
        {...props}
    />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'group    flex flex-1 items-center justify-between gap-space-03 text-right font-IBMBold text-subtitle-02 text-primary transition-all disabled:text-disabled data-[state=closed]:text-foreground',
                className,
            )}
            {...props}>
            {children}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-body-02 text-card-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}>
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
