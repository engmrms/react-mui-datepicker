import { cva, VariantProps } from 'class-variance-authority'
import classnames from 'classnames'
import React from 'react'

// Define variants for the EmptySection
const emptySectionVariants = cva('flex p-space-04 rounded-3 grow', {
    variants: {
        layout: {
            vertical: 'items-center gap-space-05 flex-col justify-start',
            horizontal: 'gap-space-03 flex-row ',
        },
        background: {
            gray: 'bg-background',
            white: 'bg-white',
            transparent: '',
        },
    },
    defaultVariants: { layout: 'vertical', background: 'transparent' },
})

export interface EmptySectionProps extends VariantProps<typeof emptySectionVariants> {
    className?: string
    title?: string
    message?: string
    icon?: React.ReactNode
    children?: React.ReactNode // For buttons or other elements
    bordered?: boolean
}

const EmptySection: React.FC<EmptySectionProps> = ({
    className = '',
    title = 'No results found',
    message,
    background,
    icon,
    layout = 'vertical',
    children,
    bordered,
    ...rest
}) => {
    return (
        <div className={classnames(emptySectionVariants({ layout, background }), { border: bordered }, className)} {...rest}>
            {icon && <div className={classnames({ 'self-start': layout === 'horizontal' })}>{icon}</div>}
            <div
                className={classnames('flex flex-col', {
                    'items-center gap-space-05': layout === 'vertical',
                    'gap-space-02': layout === 'horizontal',
                })}>
                <div
                    className={classnames('space-y-space-01', {
                        'text-center': layout === 'vertical',
                    })}>
                    <h3 className="text-body-02 font-bold text-card-foreground">{title}</h3>
                    {message && (
                        <p className={classnames('text-body-01 text-foreground', { 'text-foreground-secondary': background === 'gray' })}>
                            {message}
                        </p>
                    )}
                </div>
                {children && <div className="flex gap-space-02">{children}</div>}
            </div>
        </div>
    )
}

export default EmptySection
