/* eslint-disable react/prop-types */
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHoriz } from 'google-material-icons/outlined'
import * as React from 'react'

import { cn } from '../../Lib/utils'

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

export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator }
