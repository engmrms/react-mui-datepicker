import { cn } from '../../Lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('bg-skeleton animate-pulse rounded-md', className)} {...props} />
}

export { Skeleton }
