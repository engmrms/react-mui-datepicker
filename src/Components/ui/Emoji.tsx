import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../Lib/utils'

const EmojiVariants = cva(
    'fill-background [&>ellipse]:fill-foreground-secondary [&>path:last-child]:fill-foreground-secondary [&>rect]:fill-foreground-secondary group-data-[state=on]:[&>ellipse]:fill-white group-data-[state=on]:[&>path:last-child]:fill-white group-data-[state=on]:[&>rect]:fill-white',
    {
        variants: {
            variant: {
                awful: '[&>path]:stroke-border hover:fill-error-container [&>ellipse]:hover:fill-error [&>path:last-child]:hover:fill-error [&>path]:hover:stroke-error group-data-[state=on]:fill-error ',
                bad: '[&>path]:stroke-border hover:fill-warning-container [&>ellipse]:hover:fill-warning-dark [&>path:last-child]:hover:fill-warning-dark [&>path]:hover:stroke-warning-light group-data-[state=on]:fill-warning-dark ',
                ok: '[&>path]:stroke-border hover:fill-warning-container [&>ellipse]:hover:fill-warning-light [&>rect]:hover:fill-warning-light [&>path]:hover:stroke-warning-light group-data-[state=on]:fill-warning ',
                good: '[&>path]:stroke-border hover:fill-success-container [&>ellipse]:hover:fill-success [&>path:last-child]:hover:fill-success [&>path]:hover:stroke-sucfill-success group-data-[state=on]:fill-success ',
                great: '[&>path]:stroke-border hover:fill-primary-container [&>ellipse]:hover:fill-primary [&>path:last-child]:hover:fill-primary [&>path]:hover:stroke-prifill-primary group-data-[state=on]:fill-primary ',
            },
            size: {
                default: '',
                // sm: 'w-space-04 h-space-04',
            },
            disabled: {
                true: 'fill-transparent [&>ellipse]:fill-disabled [&>path:last-child]:fill-disabled [&>path]:stroke-disabled [&>rect]:fill-disabled pointer-events-none',
            },
        },

        defaultVariants: {
            variant: 'awful',
            size: 'default',
        },
    },
)

export interface EmojiProps extends React.SVGProps<SVGSVGElement>, VariantProps<typeof EmojiVariants> {}

export const Emoji = ({ variant, size, disabled, className, ...props }: EmojiProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            fill="none"
            className={cn(EmojiVariants({ variant, size, disabled }), className)}
            {...props}>
            <path d="M.5 28C.5 12.812 12.812.5 28 .5S55.5 12.812 55.5 28 43.188 55.5 28 55.5.5 43.188.5 28Z" />
            <ellipse cx={37.1} cy={18.9} rx={3.5} ry={6.3} />
            <ellipse cx={18.9} cy={18.9} rx={3.5} ry={6.3} />
            {(!variant || variant === 'awful') && (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42 43.4H14C15.237 37.0247 21.0346 32.2 28 32.2C34.9654 32.2 40.763 37.0247 42 43.4Z"
                />
            )}
            {variant === 'bad' && (
                <path
                    fillRule="evenodd"
                    d="M40.0704 43.4C41.4657 43.4 42.4458 42.0285 41.7947 40.7944C39.0888 35.6659 33.9249 32.2 27.9993 32.2C22.0756 32.2 16.913 35.6637 14.2065 40.7896C13.5537 42.0258 14.5357 43.4 15.9336 43.4C16.767 43.4 17.5036 42.8872 17.8998 42.154C19.9086 38.4368 23.6809 35.9334 28.0034 35.9334C32.3267 35.9334 36.0996 38.4379 38.1081 42.1563C38.5034 42.8882 39.2387 43.4 40.0704 43.4Z"
                    clipRule="evenodd"
                />
            )}
            {variant === 'ok' && <rect x="16.0996" y="39.2" width="23.8" height="4.2" rx="2.1" />}
            {variant === 'good' && (
                <path
                    fillRule="evenodd"
                    d="M40.0704 36.4C41.4657 36.4 42.4458 37.7715 41.7947 39.0055C39.0888 44.1341 33.9249 47.6 27.9993 47.6C22.0756 47.6 16.913 44.1363 14.2065 39.0103C13.5537 37.7742 14.5357 36.4 15.9336 36.4C16.767 36.4 17.5036 36.9128 17.8998 37.646C19.9086 41.3632 23.681 43.8666 28.0034 43.8666C32.3267 43.8666 36.0996 41.3621 38.1081 37.6437C38.5034 36.9118 39.2387 36.4 40.0704 36.4Z"
                    clipRule="evenodd"
                />
            )}
            {variant === 'great' && (
                <path fillRule="evenodd" d="M42 36.4H14c1.237 6.375 7.035 11.2 14 11.2s12.763-4.825 14-11.2Z" clipRule="evenodd" />
            )}
        </svg>
    )
}
export default Emoji
