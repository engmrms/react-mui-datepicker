import { useVirtualizer, VirtualItem, VirtualizerOptions } from '@tanstack/react-virtual'
import React, { useRef } from 'react'
import { cn } from '../package'

interface VirtualScrollerProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    items: T[]
    renderItem: (item: T, virtualItem?: VirtualItem) => React.ReactNode
    options?: Partial<VirtualizerOptions<HTMLDivElement, HTMLDivElement>>
    hasNextPage?: boolean
    fetchNextPage?: () => void
    isFetchingNextPage?: boolean
    status?: 'pending' | 'error' | 'success'
    error?: Error | null
    async?: boolean
}

export const VirtualScroller = <T,>({
    items,
    renderItem,
    options,
    className,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    status,
    error,
    async,
    ...rest
}: VirtualScrollerProps<T>) => {
    const parentRef = useRef<HTMLDivElement>(null)
    const rowVirtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 35, // Adjust based on your row height
        overscan: 5, // Improves scroll performance
        ...options,
    })

    const virtualItems = rowVirtualizer.getVirtualItems()

    React.useEffect(() => {
        if (!async) return
        const [lastItem] = [...virtualItems].reverse()

        if (!lastItem) {
            return
        }
        if (lastItem.index >= items.length - 1 && hasNextPage && !isFetchingNextPage) {
            fetchNextPage?.()
        }
    }, [hasNextPage, fetchNextPage, items.length, isFetchingNextPage, virtualItems, async])

    if (status === 'pending') {
        return <p>Loading...</p>
    }

    if (status === 'error') {
        return <span>Error: {error?.message}</span>
    }

    return (
        <div ref={parentRef} className={cn('overflow-y-auto contain-strict', className)} {...rest}>
            <div className="relative w-full" style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
                <div
                    className="absolute start-0 top-0 w-full"
                    style={{
                        transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
                    }}>
                    {virtualItems?.map(virtualItem => {
                        const item = items[virtualItem.index]
                        const isLoaderRow = virtualItem.index > items.length - 1
                        return (
                            <div key={virtualItem?.index} ref={rowVirtualizer.measureElement} data-index={virtualItem?.index}>
                                {isLoaderRow ? (hasNextPage ? 'Loading more...' : 'Nothing more to load') : renderItem(item, virtualItem)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
