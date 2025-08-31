import { Star, StarBorder } from 'google-material-icons/outlined'
import { useState } from 'react'
import { cn, Stack } from '../package'

interface Themes {
    size?: 'xs' | 'sm' | 'default'
    variant?: 'default' | 'brand'
    readOnly?: boolean
    className?: string
}
interface RatingProps extends Themes {
    max?: number
    value?: number
    onChange?: (value: number) => void
}

function Rating({ max = 5, onChange, value = 0, className, ...props }: RatingProps) {
    const [hoverRating, setHoverRating] = useState(0)
    return (
        <Stack gap={'none'} className={cn(className)}>
            {Array.from({ length: max }, (_, i) => {
                return (
                    <ButtonStar
                        key={i}
                        star={i + 1}
                        rating={value}
                        hoverRating={hoverRating}
                        onHover={str => !props.readOnly && setHoverRating(str)}
                        onClick={str => !props.readOnly && onChange?.(str)}
                        {...props}
                    />
                )
            })}
        </Stack>
    )
}

interface ButtonStarProps extends Themes {
    star: number
    rating: number
    hoverRating?: number
    onHover?: (star: number) => void
    onClick?: (star: number) => void
}
function ButtonStar({ star, rating, hoverRating, onHover, onClick, readOnly, variant = 'default', size = 'default' }: ButtonStarProps) {
    return (
        <button
            onMouseEnter={() => onHover?.(star)}
            onMouseLeave={() => onHover?.(0)}
            onClick={() => onClick?.(star)}
            className={cn('group relative flex   items-center justify-center', {
                'size-space-08': size === 'default',
                'size-space-06': size === 'sm',
                'size-space-05': size === 'xs',
                'cursor-default': readOnly,
            })}>
            <StarBorder
                className={cn('absolute size-full   shrink-0 ', {
                    'group-hover:opacity-0': !readOnly,
                })}
            />

            <Star
                className={cn('absolute   size-full   shrink-0   opacity-0 transition-all', {
                    'opacity-100': star <= (hoverRating || rating),
                    'group-hover:opacity-100': !readOnly,
                    'text-secondary': variant === 'default',
                    'text-primary': variant === 'brand',
                })}
            />
        </button>
    )
}

export { Rating }
