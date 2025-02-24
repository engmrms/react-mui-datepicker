/* eslint-disable react/prop-types */
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn('flex flex-col border-b border-b-border-neutral-primary', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { size?: 'default' | 'sm' | 'xs'; isLeading?: boolean }
>(({ className, children, size = 'default', isLeading = false, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'group flex flex-1 items-center gap-space-04 border-2 border-transparent px-space-04  text-body-02 text-text-default transition-all hover:bg-button-background-neutral-hovered focus:border-border-black focus:bg-transparent focus:outline-none active:bg-button-background-neutral-pressed disabled:text-disabled-text-default-disabled [&>svg]:size-space-04',
                {
                    'py-space-04 font-bold': size === 'default',
                    'py-space-03 font-semibold': size === 'sm',
                    'py-space-02 font-semibold': size === 'xs',
                    'justify-between ': !isLeading,
                    'flex-row-reverse justify-end': isLeading,
                },
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
        className="overflow-hidden text-body-02 text-text-paragraph-primary transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[disabled]:text-disabled-text-default-disabled"
        {...props}>
        <div className={cn('pb-space-05 pe-space-08 ps-space-04 pt-space-02', className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
