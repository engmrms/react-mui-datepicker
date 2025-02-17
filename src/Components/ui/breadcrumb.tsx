/* eslint-disable react/prop-types */
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHoriz } from 'google-material-icons/outlined'
import * as React from 'react'

import { useMediaQuery } from 'usehooks-ts'
import { cn } from '../../Lib/utils'
import ShouldRender from '../ShouldRender'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'

const Breadcrumb = React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithoutRef<'nav'> & {
        separator?: React.ReactNode
    }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(({ className, ...props }, ref) => (
    <ol
        ref={ref}
        className={cn('flex flex-wrap items-center gap-1.5 break-words text-body-01 text-link-neutral sm:gap-space-01', className)}
        {...props}
    />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn('inline-flex items-center gap-space-02', className)} {...props} />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<'a'> & {
        asChild?: boolean
        as?: typeof Slot
        style?: React.CSSProperties
    }
>(({ asChild, className, style, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'

    return <Comp ref={ref} className={cn('transition-colors hover:text-link-neutral-hovered hover:underline', className)} style={style} {...props} />
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(({ className, ...props }, ref) => (
    <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn('font-normal text-disabled-text-default-disabled', className)}
        {...props}
    />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => (
    <li role="presentation" aria-hidden="true" className={cn('[&>svg]:size-space-04', className)} {...props}>
        {children ?? <ChevronRight className="text-icon-default-400 rtl:rotate-180" />}
    </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <span role="presentation" aria-hidden="true" className={cn('flex h-9 w-9 items-center justify-center text-link-neutral', className)} {...props}>
        <MoreHoriz className="h-space-04 w-space-04" />
        <span className="sr-only">More</span>
    </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

type Item = { title: string | string[]; path?: string; state?: unknown; render?: React.ReactNode }
type PropsBreadcrumb = {
    items: Item[]
    dir?: 'rtl'|'ltr'
}

const renderItem = ({ item }: { item: Item }) => {
    return (
        <>
            <ShouldRender shouldRender={!!item.render}>
                <BreadcrumbLink asChild>{item.render}</BreadcrumbLink>
            </ShouldRender>
            <ShouldRender shouldRender={!item.render}>
                <BreadcrumbLink href={item.path}>{item.title}</BreadcrumbLink>
            </ShouldRender>
        </>
    )
}

const Breadcrumbs = ({ items, dir }: PropsBreadcrumb) => {
    const isMobile = useMediaQuery('(max-width: 768px)')

    return (
        <Breadcrumb dir={dir}>
            <BreadcrumbList>
                <ShouldRender shouldRender={isMobile}>
                    <>
                        {/* First Item */}
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>{renderItem({ item: items[0] })}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {items.length >= 2 && <BreadcrumbSeparator />}

                        {/* Dropdown for Intermediate Items */}
                        {items.length > 2 && (
                            <>
                                <BreadcrumbItem>
                                    <DropdownMenu dir={dir}>
                                        <DropdownMenuTrigger>
                                            <BreadcrumbEllipsis />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {items.slice(1, -1).map((item, idx) => (
                                                <DropdownMenuItem key={idx} asChild>
                                                    {renderItem({ item })}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </>
                        )}

                        {/* Last Item */}
                        <BreadcrumbItem>
                            <BreadcrumbPage>{items[items.length - 1].title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                </ShouldRender>
                <ShouldRender shouldRender={!isMobile}>
                    {
                        // Desktop View: Render All Items
                        items.map((item, idx) => (
                            <React.Fragment key={`${item.title}`}>
                                <BreadcrumbItem>
                                    {items.length - 1 !== idx ? renderItem({ item }) : <BreadcrumbPage>{item.title}</BreadcrumbPage>}
                                </BreadcrumbItem>
                                {items.length - 1 !== idx && <BreadcrumbSeparator />}
                            </React.Fragment>
                        ))
                    }
                </ShouldRender>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
Breadcrumbs.displayName = 'Breadcrumbs'

export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, Breadcrumbs, BreadcrumbSeparator }
