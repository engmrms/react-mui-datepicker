/* eslint-disable react/prop-types */
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'
import { cn } from '../../Lib/utils'

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    colors?:
        | 'bg-primary'
        | 'bg-secondary'
        | 'bg-tertiary'
        | 'bg-error'
        | 'bg-warning'
        | 'bg-success'
        | 'bg-info'
        | 'bg-secondary-light'
        | 'bg-disabled'
    icon?: React.ReactNode
    rounded?: boolean
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
    ({ className, value, colors = 'bg-primary', rounded, icon, ...props }, ref) => (
        <div className="relative w-full">
            <ProgressPrimitive.Root
                ref={ref}
                aria-label='progress'
                className={cn('relative h-space-02 w-full overflow-hidden bg-background-secondary', rounded && 'rounded-full', className)}
                {...props}>
                <ProgressPrimitive.Indicator
                    className={cn('h-full w-full flex-1 transition-all', rounded && 'rounded-full', colors)}
                    style={{
                        transform: props?.dir === 'rtl' ? `translateX(${100 - (value || 0)}%)` : `translateX(-${100 - (value || 0)}%)`,
                    }}
                />
            </ProgressPrimitive.Root>
            {!!icon && (
                <div
                    className="absolute top-1/2 -translate-y-1/2 duration-200"
                    style={{
                        [props?.dir === 'rtl' ? 'right' : 'left']: `calc(${value}% + -12px)`,
                    }}>
                    {icon}
                </div>
            )}
        </div>
    ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
