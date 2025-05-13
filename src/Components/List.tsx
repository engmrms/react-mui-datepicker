import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { cn } from '../Lib/utils'
import { ShouldRender } from '../package'

const listVariants = cva('text-body-02', {
    variants: {
        variant: {
            ordered: 'list-decimal rtl:[&>ol]:list-[arabic-letters] [&>ol]:list-[lower-alpha] [&>ol]:list-inside ',
            unordered: 'list-disc [&>ul]:list-[circle] [&>ul]:list-inside ',
            'with-icon': 'list-none [&>li>svg]:size-space-04  [&>li]:gap-space-02 [&>ul]:list-inside [&>li]:flex [&>li]:items-center',
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

type ListProps = React.HTMLAttributes<HTMLUListElement> &
    VariantProps<typeof listVariants> & {
        items?: string[] | React.ReactNode[]
        icon?: React.ReactNode
    }

const List = ({ children, variant, colors, items, icon, className, ...props }: ListProps) => {
    const ListComponent = variant === 'ordered' ? 'ol' : 'ul'

    return (
        <>
            <ShouldRender shouldRender={!!items?.length}>
                <ListComponent className={cn(listVariants({ variant, colors, className }))} {...props}>
                    {items?.map((item, index) => (
                        <ListItem key={index}>
                            {!!icon && variant === 'with-icon' && icon}
                            {item}
                        </ListItem>
                    ))}
                </ListComponent>
            </ShouldRender>

            <ShouldRender shouldRender={!items?.length}>
                <ListComponent className={cn(listVariants({ variant, colors, className }))} {...props}>
                    {children}
                </ListComponent>
            </ShouldRender>
        </>
    )
}

List.displayName = 'List'

const ListItem = forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(({ children, ...props }, ref) => {
    return (
        <li ref={ref} {...props} className="">
            {/* {Icon && <Icon className="h-8 w-8 shrink-0" />} */}
            {children}
        </li>
    )
})
ListItem.displayName = 'ListItem'

export { List, ListItem }
