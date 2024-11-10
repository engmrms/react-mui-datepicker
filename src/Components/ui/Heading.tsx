import { Slot } from '@radix-ui/react-slot'
import React, { ElementType, forwardRef, ReactNode } from 'react'

type AllowedElements = Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

type HeadingProps<T extends AllowedElements = 'h1'> = {
    as?: T
    asChild?: boolean
    children: ReactNode
} & React.ComponentPropsWithoutRef<T>

const Heading = forwardRef(<T extends AllowedElements = 'h1'>({ as, children, asChild, ...props }: HeadingProps<T>, ref: React.Ref<ElementType>) => {
    const Component = asChild ? Slot : ((as || 'h1') as ElementType)
    return (
        <Component ref={ref} {...props}>
            {children}
        </Component>
    )
})
Heading.displayName = 'Heading'
export default Heading
