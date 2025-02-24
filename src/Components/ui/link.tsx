/* eslint-disable react-refresh/only-export-components */
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../Lib/utils'

const linkVariants = cva(
    'inline-flex items-center gap-space-02 justify-center transition-colors focus:outline focus:outline-2 focus:outline-offset-1',
    {
        variants: {
            size: {
                default: 'text-body-02 [&>svg]:size-[20px]',
                sm: 'text-body-01 [&>svg]:size-space-04',
            },

            colors: {
                primary:
                    'text-link-primary hover:text-link-primary-hovered focus:text-link-primary-focused active:text-link-primary-pressed visited:text-link-primary-visited focus:outline-border-black',
                neutral:
                    'text-link-neutral hover:text-link-neutral-hovered focus:text-link-neutral-focused active:text-link-neutral-pressed visited:text-link-neutral-visited focus:outline-border-black',
                oncolor:
                    'text-link-oncolor hover:text-link-oncolor-hovered focus:text-link-oncolor-focused active:text-link-oncolor-pressed visited:text-link-oncolor-visited focus:outline-border-white',
            },
            underline: {
                hover: 'underline-offset-2 hover:underline',
                always: 'underline-offset-2 underline',
            },
            disabled: {
                true: 'pointer-events-none cursor-not-allowed !text-disabled-text-default-disabled',
            },
        },
        compoundVariants: [],
        defaultVariants: {
            size: 'default',
            colors: 'primary',
            underline: 'hover',
        },
    },
)

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
    asChild?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, size, underline, target, colors, disabled = false, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'a'
        const appendrel = target === '_blank' ? 'noopener noreferrer' : ''
        return (
            <Comp
                className={cn('text-link-primary', linkVariants({ size, underline, disabled, colors, className }))}
                ref={ref}
                rel={appendrel}
                {...props}
            />
        )
    },
)
Link.displayName = 'Link'

export { Link, linkVariants }
