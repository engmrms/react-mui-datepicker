import { ChevronLeft, ChevronRight } from 'google-material-icons/outlined'
import * as React from 'react'
import { Button } from './'
import { cn } from '../Lib'

interface ResponsiveScrollProps {
    children: React.ReactNode
    scrollAmount?: number
    className?: string
    margin?: number
    buttonClassName?: string
}

export function ResponsiveScroll({ children, scrollAmount = 200, margin = 0, className = '', buttonClassName = '' }: ResponsiveScrollProps) {
    const [canScrollStart, setCanScrollStart] = React.useState(false)
    const [canScrollEnd, setCanScrollEnd] = React.useState(false)
    const scrollContainerRef = React.useRef<HTMLDivElement>(null)

    const checkScroll = React.useCallback(() => {
        const el = scrollContainerRef.current
        const dir = document.dir
        if (el) {
            const scrollleft = (dir === 'ltr' ? 1 : -1) * el.scrollLeft
            const canScrollStart = scrollleft > 0
            const canScrollEnd = scrollleft < el.scrollWidth - el.clientWidth - margin
            setCanScrollStart(canScrollStart)
            setCanScrollEnd(canScrollEnd)
        }
    }, [margin])

    const scroll = (direction: 'start' | 'end') => {
        if (scrollContainerRef.current) {
            const dir = document.dir
            const scrollDirection = (dir === 'ltr' && direction === 'start') || (dir === 'rtl' && direction === 'end') ? -1 : 1
            scrollContainerRef.current.scrollBy({
                left: scrollAmount * scrollDirection,
                behavior: 'smooth',
            })
        }
    }

    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            checkScroll()
            scrollContainer.addEventListener('scroll', checkScroll)
            window.addEventListener('resize', checkScroll)

            return () => {
                scrollContainer.removeEventListener('scroll', checkScroll)
                window.removeEventListener('resize', checkScroll)
            }
        }
    }, [checkScroll])

    React.useEffect(() => {
        const styleElement = document.createElement('style')
        styleElement.textContent = styles
        document.head.appendChild(styleElement)
        return () => {
            document.head.removeChild(styleElement)
        }
    }, [])

    return (
        <div className="relative flex items-center">
            {canScrollStart && (
                <>
                    <div className="pointer-events-none absolute start-0 top-0 z-[5] h-full  w-[120px] bg-gradient-to-r from-transparent via-white via-60% to-white"></div>
                    <Button
                        variant="text"
                        size="icon"
                        colors={'neutral'}
                        onClick={() => scroll('start')}
                        aria-label="Scroll left"
                        className={`absolute start-0 z-10 flex-shrink-0 ${buttonClassName}`}>
                        <ChevronLeft className="size-space-04 rtl:rotate-180" />
                    </Button>
                </>
            )}
            <div
                ref={scrollContainerRef}
                className={cn(
                    `no-scrollbar flex-1 `,
                    {
                        'overflow-x-auto ': canScrollEnd || canScrollStart,
                    },
                    className,
                )}>
                <div className="flex">{children}</div>
            </div>
            {canScrollEnd && (
                <>
                    <div className="pointer-events-none absolute end-0 top-0 z-[5] h-full w-[120px] bg-gradient-to-l from-transparent via-white via-60% to-white"></div>
                    <Button
                        variant="text"
                        size="icon"
                        colors={'neutral'}
                        onClick={() => scroll('end')}
                        aria-label="Scroll right"
                        className={`absolute end-0 z-10 flex-shrink-0  ${buttonClassName}`}>
                        <ChevronRight className="size-space-04 rtl:rotate-180" />
                    </Button>
                </>
            )}
        </div>
    )
}

const styles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`
