import { useVirtualizer, VirtualItem, VirtualizerOptions } from '@tanstack/react-virtual'
import React, { useRef } from 'react'
import { cn, ShouldRender, Skeleton } from '../package'

interface VirtualScrollerProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    items: T[]
    renderItem: (item: T, virtualItem?: VirtualItem) => React.ReactNode
    options?: Partial<VirtualizerOptions<HTMLDivElement, HTMLDivElement>>

    onAsyncLoad?: () => void
    isLoading?: boolean
    async?: boolean
    renderLoader?: (isLoading?: boolean) => React.ReactNode
}

/**
 * The props for the VirtualScroller component.
 * @param items - The items to display in the virtual scroller.
 * @param renderItem - The function to render each item.
 * @param options - The options for the virtual scroller.
 * @param onAsyncLoad - The function to load more data when the end of the list is reached.
 * @param isLoading - The flag to indicate if the list is loading.
 * @param async - The flag to indicate if the list is infinite.
 * @param renderLoader - The function to render the loader.
 */
const VirtualScroller = <T,>({
    items,
    renderItem,
    options,
    className,
    async,
    onAsyncLoad,
    isLoading,
    renderLoader,
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
        if (lastItem.index >= items.length - 1) {
            onAsyncLoad?.()
        }
    }, [items.length, virtualItems, async, onAsyncLoad])

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
                                {!isLoaderRow ? renderItem(item, virtualItem) : <Skeleton className="h-[35px] w-full" />}
                            </div>
                        )
                    })}
                </div>
            </div>

            <ShouldRender shouldRender={!!renderLoader}>{renderLoader?.(isLoading)}</ShouldRender>
            <ShouldRender shouldRender={isLoading && !renderLoader}>
                <p>{isLoading ? 'Loading more...' : 'Nothing more to load'}</p>
            </ShouldRender>
        </div>
    )
}

export { VirtualScroller }
