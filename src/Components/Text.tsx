import { Slot } from '@radix-ui/react-slot'
import React, { ElementType, forwardRef, ReactNode } from 'react'

type AllowedElements = Extract<keyof JSX.IntrinsicElements, 'span' | 'label' | 'p'>

type TextProps<T extends AllowedElements = 'span'> = {
    as?: T
    asChild?: boolean
    children: ReactNode
} & React.ComponentPropsWithoutRef<T>

const Text = forwardRef(<T extends AllowedElements = 'span'>({ as, children, asChild, ...props }: TextProps<T>, ref: React.Ref<ElementType>) => {
    const Component = asChild ? Slot : ((as || 'span') as ElementType)
    return (
        <Component ref={ref} {...props}>
            {children}
        </Component>
    )
})
Text.displayName = 'Text'
export default Text
