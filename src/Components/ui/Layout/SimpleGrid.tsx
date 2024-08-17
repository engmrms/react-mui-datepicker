import clsx from 'clsx'
import React from 'react'

interface SimpleGridProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The minimum width of each child element. When specified, the grid will adjust its columns
     * to fit as many items as possible per row based on this minimum width.
     */
    minChildWidth?: string | number // Example values: '150px', '10rem', 100

    /**
     * The number of columns or responsive array of columns.
     * If `minChildWidth` is specified, this will be overridden.
     */
    cols?: number

    /**
     * The gap between grid items.
     */
    spacing?: string

    /**
     * The column gap between grid items.
     */
    spacingX?: string

    /**
     * The row gap between grid items.
     */
    spacingY?: string
}

export const SimpleGrid: React.FC<SimpleGridProps> = ({
    minChildWidth,
    cols = 12, // Default to 12 columns
    spacing = 'gap-space-05', // Default spacing
    spacingX = '',
    spacingY = '',
    className,
    children,
    ...rest
}) => {
    // Determine the grid template columns based on minChildWidth or cols
    const gridTemplateColumns = minChildWidth
        ? `repeat(auto-fill, minmax(${typeof minChildWidth === 'number' ? `${minChildWidth}px` : minChildWidth}, 1fr))`
        : `repeat(${cols}, minmax(0, 1fr))`

    return (
        <div className={clsx('grid', spacing, spacingX, spacingY, className)} style={{ gridTemplateColumns }} {...rest}>
            {children}
        </div>
    )
}
