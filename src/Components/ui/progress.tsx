/* eslint-disable react/prop-types */
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '../../Lib/utils'

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    bg?: 'bg-primary' | 'bg-secondary' | 'bg-tertiary' | 'bg-error' | 'bg-warning' | 'bg-success' | 'bg-info'
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
    ({ className, value, bg = 'bg-primary', ...props }, ref) => (
        <ProgressPrimitive.Root
            ref={ref}
            className={cn('relative h-space-02 w-full overflow-hidden rounded-1 bg-background-secondary', className)}
            {...props}>
            <ProgressPrimitive.Indicator
                className={cn('h-full w-full flex-1 transition-all', bg)}
                style={{ transform: props?.dir === 'rtl' ? `translateX(${100 - (value || 0)}%)` : `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
