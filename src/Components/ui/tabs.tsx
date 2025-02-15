/* eslint-disable react/prop-types */
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'
import ShouldRender from '../ShouldRender'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const tabVariants = cva(
    `relative inline-flex  items-center justify-center   transition-all disabled:pointer-events-none  data-[state=active]:font-semibold`,
    {
        variants: {
            container: {
                filled: ' gap-space-01  rounded-full bg-background-muted p-space-01',
                underline: '',
                transparent: ' gap-space-01 rounded-full',
            },
            variant: {
                filled: 'after:hidden hover:bg-button-background-neutral-hovered data-[state=inactive]:text-text-paragraph-primary rounded-full  data-[state=active]:bg-button-background-primary text-text-oncolor-primary data-[state=active]:shadow-sm hover:data-[state=active]:bg-button-background-primary-hovered  disabled:data-[state=active]:bg-disabled-background-disabled disabled:text-disabled-text-default-disabled',
                underline:
                    'relative data-[state=inactive]:text-text-paragraph-primary after:z-[1]  hover:data-[state=inactive]:bg-button-background-neutral-hovered hover:text-text-default after:absolute after:block after:bottom-[1px] after:rounded-full after:start-1/2 after:-translate-x-1/2 after:h-[3px] hover:after:bg-border-black hover:data-[state=active]:after:bg-border-primary-default data-[state=active]:after:bg-border-primary-default disabled:data-[state=active]:after:bg-border-disabled disabled:text-disabled-text-default-disabled',
                transparent:
                    'hover:bg-card-hover hover:data-[state=inactive]:text-card-foreground rounded-full py-space-02 px-space-04  focus-visible:outline-none data-[state=active]:bg-background data-[state=active]:text-card-foreground data-[state=active]:shadow-sm hover:data-[state=active]:bg-background data-[state=active]:disabled:bg-disabled',
            },
            size: {
                default: 'text-body-02 py-space-03 px-space-04 after:w-[calc(100%_-_32px)] [&>svg]:size-space-04 gap-space-01',
                sm: 'text-body-01 py-space-02 px-space-03 after:w-[calc(100%_-_24px)]  [&>svg]:size-space-04 gap-space-01',
            },
            disabled: {
                false: null,
                true: null,
            },
            underline: {
                false: null,
                true: null,
            },
            orientation: {
                vertical: 'flex-col items-start',
                horizontal: 'flex-row',
            },
        },
        compoundVariants: [
            {
                container: 'underline',
                underline: true,
                className:
                    'after:absolute after:bottom-0 after:start-0 after:z-0 after:h-[3px] after:w-full after:rounded-full after:bg-border-neutral-primary',
            },
            {
                container: 'underline',
                underline: true,
                orientation: 'vertical',
                className:
                    'after:absolute after:start-0 after:top-0  after:z-0 after:w-[3px] after:h-full after:rounded-full after:bg-border-neutral-primary',
            },
            {
                variant: 'underline',
                orientation: 'vertical',
                className: 'after:start-[2px] after:top-1/2 after:-translate-y-1/2 after:w-[3px] after:bottom-0',
            },
            {
                variant: 'underline',
                orientation: 'vertical',
                size: 'default',
                className: 'after:h-[calc(100%_-_24px)]',
            },
            {
                variant: 'underline',
                orientation: 'vertical',
                size: 'sm',
                className: 'after:h-[calc(100%_-_16px)]',
            },
        ],
    },
)

const Tabs = TabsPrimitive.Root

const TabsContext = React.createContext<VariantProps<typeof tabVariants>>({
    variant: 'filled',
    size: 'default',
    orientation: 'horizontal',
})

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
        VariantProps<typeof tabVariants> & {
            breakpoints?: { [key: number]: number }
        }
>(({ className, underline, orientation, variant = 'filled', size = 'default', children, breakpoints = {}, ...props }, ref) => {
    const [visibleTabs, setVisibleTabs] = React.useState(React.Children.count(children))
    const [open, setOpen] = React.useState(false)

    const sortedBreakpoints = Object.entries(breakpoints).sort(([a], [b]) => Number(a) - Number(b))
    const tabCount = React.useCallback(
        () =>
            sortedBreakpoints.find(([breakpoint]) => document.documentElement.clientWidth <= Number(breakpoint))?.[1] ??
            React.Children.count(children),
        [children, sortedBreakpoints],
    )

    React.useEffect(() => {
        setVisibleTabs(tabCount())
    }, [tabCount])

    window.onresize = function () {
        setVisibleTabs(tabCount())
    }

    const mapChildren = React.Children?.map(children, child => child) as React.ReactElement[]

    return (
        <TabsPrimitive.List ref={ref} className={cn(tabVariants({ container: variant, underline, orientation }), className)} {...props}>
            <TabsContext.Provider value={{ variant, size, orientation }}>{mapChildren?.slice(0, visibleTabs)}</TabsContext.Provider>
            <ShouldRender shouldRender={!!mapChildren?.slice(visibleTabs).length}>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="text" colors={'neutral'} size={'xs'}>
                            <span className="text-subtitle-02">...</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                            {mapChildren?.slice(visibleTabs).map(tab => (
                                <TabsTrigger key={tab.toString()} className="!rounded-0" value={tab.props.value} onClick={() => setOpen(false)}>
                                    {tab.props.value}
                                </TabsTrigger>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            </ShouldRender>
        </TabsPrimitive.List>
    )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(
    ({ className, ...props }, ref) => {
        const context = React.useContext(TabsContext)

        return (
            <TabsPrimitive.Trigger
                ref={ref}
                className={cn(tabVariants({ variant: context.variant, orientation: context.orientation, size: context.size }), className)}
                {...props}
            />
        )
    },
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(
    ({ className, ...props }, ref) => (
        <TabsPrimitive.Content
            ref={ref}
            className={cn(
                'mt-2 ring-offset-background data-[state=inactive]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                className,
            )}
            {...props}
        />
    ),
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger, tabVariants }
