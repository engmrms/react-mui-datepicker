/* eslint-disable react/prop-types */
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const tabVariants = cva(
    `inline-flex items-center justify-center whitespace-nowrap
px-space-04 text-body-02 font-IBMReguler
text-foreground-secondary ring-offset-background transition-all hover:text-primary-dark focus-visible:ring-2 focus-visible:ring-ring
focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-disabled
data-[state=active]:font-IBMBold`,
    {
        variants: {
            container: {
                filled: 'inline-flex  items-center justify-center space-x-space-01 space-x-reverse rounded-[10rem] border border-input bg-white p-space-02',
                underline: '',
            },
            variant: {
                filled: 'rounded-full py-space-02 hover:bg-card-hover focus-visible:outline-none data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm hover:data-[state=active]:bg-primary-dark',
                underline:
                    'hover:bg-card-hover py-space-03 data-[state=active]:text-primary border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:hover:border-b-primary-dark data-[state=active]:hover:text-primary-dark data-[state=active]:disabled:border-b-disabled',
            },
        },
    },
)

const Tabs = TabsPrimitive.Root

const TabsContext = React.createContext<VariantProps<typeof tabVariants>>({
    variant: 'filled',
})

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabVariants>
>(({ className, variant = 'filled', children, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn(tabVariants({ container: variant }), className)} {...props}>
        <TabsContext.Provider value={{ variant }}>{children}</TabsContext.Provider>
    </TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(
    ({ className, ...props }, ref) => {
        const context = React.useContext(TabsContext)
        return <TabsPrimitive.Trigger ref={ref} className={cn(tabVariants({ variant: context.variant }), className)} {...props} />
    },
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(
    ({ className, ...props }, ref) => (
        <TabsPrimitive.Content
            ref={ref}
            className={cn(
                'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                className,
            )}
            {...props}
        />
    ),
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
