import { ChevronLeft, ChevronRight } from 'google-material-icons/outlined'
import * as React from 'react'
import { Button } from './'

interface ResponsiveScrollProps {
    children: React.ReactNode
    scrollAmount?: number
    className?: string
    margin?: number
    buttonClassName?: string
}

export function ResponsiveScroll({ children, scrollAmount = 200, margin = 0, className = '', buttonClassName = '' }: ResponsiveScrollProps) {
    const [canScrollLeft, setCanScrollLeft] = React.useState(false)
    const [canScrollRight, setCanScrollRight] = React.useState(false)
    const scrollContainerRef = React.useRef<HTMLDivElement>(null)

    const checkScroll = React.useCallback(() => {
        const el = scrollContainerRef.current

        if (el) {
            const canScrollLeft = el.scrollLeft > 0
            const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - margin
            setCanScrollLeft(canScrollLeft)
            setCanScrollRight(canScrollRight)
        }
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
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
            {canScrollLeft && (
                <>
                    <div className="pointer-events-none absolute start-0 top-0 z-[5] h-full  w-[120px] bg-gradient-to-l from-transparent via-white via-60% to-white"></div>
                    <Button
                        variant="text"
                        size="icon"
                        colors={'neutral'}
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className={`absolute left-0 z-10 flex-shrink-0 ${buttonClassName}`}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </>
            )}
            <div ref={scrollContainerRef} className={`no-scrollbar flex-1 overflow-x-auto    ${className}`}>
                <div className="flex">{children}</div>
            </div>
            {canScrollRight && (
                <>
                    <div className="pointer-events-none absolute end-0 top-0 z-[5] h-full w-[120px] bg-gradient-to-r from-transparent via-white via-60% to-white"></div>
                    <Button
                        variant="text"
                        size="icon"
                        colors={'neutral'}
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className={`absolute right-0 z-10 flex-shrink-0  ${buttonClassName}`}>
                        <ChevronRight className="h-4 w-4" />
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
