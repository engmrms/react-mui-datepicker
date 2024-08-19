import { cva, VariantProps } from 'class-variance-authority'
import classnames from 'classnames'
import React from 'react'

// Define variants for the EmptySection
const emptySectionVariants = cva('flex flex-col p-space-04 rounded-3', {
    variants: {
        layout: {
            vertical: 'items-center gap-space-05',
            horizontal: 'gap-space-02',
        },
        background: {
            gray: 'bg-background',
        },
    },
    defaultVariants: { layout: 'vertical' },
})

export interface EmptySectionProps extends VariantProps<typeof emptySectionVariants> {
    title?: string
    message?: string
    icon?: React.ReactNode
    children?: React.ReactNode // For buttons or other elements
    bordered?: boolean
}

const EmptySection: React.FC<EmptySectionProps> = ({
    title = 'No results found',
    message = 'Try adjusting your search or filter to find what you are looking for.',
    background,
    icon,
    layout,
    children,
    bordered,
}) => {
    return (
        <div className={classnames(emptySectionVariants({ layout, background }), { border: bordered })}>
            <div
                className={classnames('flex', {
                    'flex-row gap-space-03': layout === 'horizontal',
                    'flex-col items-center gap-space-05': layout === 'vertical',
                })}>
                {icon && <div>{icon}</div>}
                <div className={classnames({ 'text-center': layout === 'vertical' })}>
                    <h3 className="font-IBMBold text-body-02 text-card-foreground">{title}</h3>
                    <p className="text-body-01 text-foreground-secondary">{message}</p>
                </div>
            </div>
            {children && <div className="flex gap-space-02">{children}</div>}
        </div>
    )
}

export default EmptySection
