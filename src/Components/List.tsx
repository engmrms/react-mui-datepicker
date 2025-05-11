import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { cn } from '../Lib/utils'

const listVariants = cva('text-body-02', {
    variants: {
        variant: {
            ordered: 'list-decimal rtl:[&>ol]:list-[arabic-letters] [&>ol]:list-[lower-alpha] [&>ol]:list-inside',
            unordered: 'list-disc [&>ul]:list-[circle] [&>ul]:list-inside',
            'with-icon': 'list-none [&>li>svg]:size-space-04  [&>li]:gap-space-02 [&>ul]:list-inside',
        },
        colors: {
            primary: 'text-text-primary',
            neutral: 'text-text-default',
            onColor: 'text-text-oncolor-primary',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        variant: 'ordered',
        colors: 'primary',
    },
})

const List = ({ children, variant, colors, className, ...props }: React.HTMLAttributes<HTMLUListElement> & VariantProps<typeof listVariants>) => {
    const ListComponent = variant === 'ordered' ? 'ol' : 'ul'

    return (
        <ListComponent className={cn(listVariants({ variant, colors, className }))} {...props}>
            {children}
        </ListComponent>
    )
}

List.displayName = 'List'

const ListItem = forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(({ children, ...props }, ref) => {
    return (
        <li ref={ref} {...props} className="flex items-center">
            {/* {Icon && <Icon className="h-8 w-8 shrink-0" />} */}
            {children}
        </li>
    )
})
ListItem.displayName = 'ListItem'

export { List, ListItem }
