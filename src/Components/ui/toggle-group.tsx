import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { toggleVariants } from '../../Components/ui/toggle'
import { cn } from '../../Lib/utils'
import { ResponsiveScroll } from '../ResponsiveScroll'

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
    size: 'default',
    variant: 'default',
    colors: 'default',
})

const ToggleGroup = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, colors, children, ...props }, ref) => (
    <ResponsiveScroll   buttonClassName="bg-background">
        <ToggleGroupPrimitive.Root ref={ref} className={cn('flex items-center justify-center gap-space-01', className)} {...props}>
            <ToggleGroupContext.Provider value={{ variant, size, colors }}>{children}</ToggleGroupContext.Provider>
        </ToggleGroupPrimitive.Root>
    </ResponsiveScroll>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, colors, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext)

    return (
        <ToggleGroupPrimitive.Item
            ref={ref}
            className={cn(
                toggleVariants({
                    variant: context.variant || variant,
                    size: context.size || size,
                    colors: context.colors || colors,
                }),
                'shrink-0',
                className,
            )}
            {...props}>
            {children}
        </ToggleGroupPrimitive.Item>
    )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

// interface ToggleOption {
//     value: string
//     label: string
// }

// function ResponsiveToggleGroup({ options, ...props }: React.ComponentProps<typeof ToggleGroup> & { options: ToggleOption[] }) {
//     return (
//         <ResponsiveScroll className="py-2" buttonClassName="bg-background">
//             <ToggleGroup {...props}  >
//                 {options.map(option => (
//                     <ToggleGroupItem key={option.value} value={option.value} aria-label={option.label} className="flex-shrink-0">
//                         {option.label}
//                     </ToggleGroupItem>
//                 ))}
//             </ToggleGroup>
//         </ResponsiveScroll>
//     )
// }

export { ToggleGroup, ToggleGroupItem }
