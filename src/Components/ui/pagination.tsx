/* eslint-disable react/prop-types */
import { MoreHorizontal } from 'lucide-react'
import * as React from 'react'

import { ChevronLeft, ChevronRight } from 'google-material-icons/outlined'
import { ButtonProps } from '../../Components/ui/button'
import { cn } from '../../Lib/utils'
import { strings } from '../../Locales'

type hasText = {
    hasText?: boolean
}
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
    <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
)

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-space-01', className)} {...props} />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
    isActive?: boolean
} & Pick<ButtonProps, 'size'> &
    React.ComponentProps<'button'>

const PaginationLink = ({ className, isActive, ...props }: PaginationLinkProps) => (
    <button
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            'flex h-16 min-w-16 items-center justify-center gap-space-01 rounded-1 border text-body-01',
            `${isActive ? 'border-primary text-primary' : 'border-transparent hover:bg-card-hover'}`,
            className,
        )}
        {...props}
    />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, hasText, ...props }: React.ComponentProps<typeof PaginationLink> & hasText) => (
    <PaginationLink aria-label="Go to previous page" size="default" className={cn(className)} {...props}>
        <ChevronRight className="h-space-05 w-space-05 ltr:rotate-180" />
        {hasText && <span className="hidden sm:inline-block">{strings.Shared.previous}</span>}
    </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, hasText, ...props }: React.ComponentProps<typeof PaginationLink> & hasText) => (
    <PaginationLink aria-label="Go to next page" size="default" className={cn(className)} {...props}>
        {hasText && <span className="hidden sm:inline-block">{strings.Shared.next}</span>}
        <ChevronLeft className="h-space-05 w-space-05 ltr:rotate-180" />
    </PaginationLink>
)

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">{strings.Shared.morePages}</span>
    </span>
)

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
