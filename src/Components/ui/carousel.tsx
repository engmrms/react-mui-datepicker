import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'

import { ChevronLeft, ChevronRight } from 'google-material-icons/outlined'
import * as React from 'react'
import { cn } from '../../Lib'
import { Button } from './button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: 'horizontal' | 'vertical'
    setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />')
    }

    return context
}

const CarouselPrimitive = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
    ({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === 'horizontal' ? 'x' : 'y',
            },
            plugins,
        )
        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) {
                return
            }

            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }, [])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev()
        }, [api])

        const scrollNext = React.useCallback(() => {
            api?.scrollNext()
        }, [api])

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault()
                    scrollNext()
                }
            },
            [scrollPrev, scrollNext],
        )

        React.useEffect(() => {
            if (!api || !setApi) {
                return
            }

            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) {
                return
            }

            onSelect(api)
            api.on('reInit', onSelect)
            api.on('select', onSelect)

            return () => {
                api?.off('select', onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}>
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn('relative', className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}>
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    },
)
CarouselPrimitive.displayName = 'CarouselPrimitive'

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div ref={ref} className={cn('flex', orientation === 'horizontal' ? 'mx-4' : '-mt-4 flex-col', className)} {...props} />
        </div>
    )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return <div ref={ref} role="group" aria-roledescription="slide" className={cn('min-w-0 shrink-0 grow-0 basis-full', className)} {...props} />
})
CarouselItem.displayName = 'CarouselItem'

interface CustomCarouselProps {
    children: React.ReactNode
    className?: string
    itemClassName?: string
    showDots?: boolean
    showArrows?: boolean
    loop?: boolean
    autoplay?: boolean
    autoplayInterval?: number
    containerClassName?: string
    maxDots?: number | null
    itemWidth?: number | string
    slidesToShow?: number
    showPartial?: boolean
    dir?: 'ltr' | 'rtl'
    type?: 'single' | 'multiple'
    slidesToScroll?: number | 'auto'
}

export function Carousel({
    children,
    className,
    itemClassName,
    showDots = true,
    showArrows = true,
    loop = true,
    autoplay = false,
    autoplayInterval = 5000,
    containerClassName,
    maxDots = null,
    itemWidth = 230,
    slidesToShow,
    showPartial = true,
    dir = 'rtl',
    type = 'multiple',
    slidesToScroll = 1,
}: Readonly<CustomCarouselProps>) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [needsNavigation, setNeedsNavigation] = React.useState(true)

    const idPrefix = React.useId()

    // Calculate item width based on slidesToShow if provided
    const calculatedItemWidth = React.useMemo(() => {
        if (type === 'single') return '100%'
        if (slidesToShow) {
            return `calc(${100 / slidesToShow}% - ${showPartial ? '1rem' : '0px'})`
        }
        return typeof itemWidth === 'number' ? `${itemWidth}px` : itemWidth
    }, [type, slidesToShow, itemWidth, showPartial])

    const animateToIndex = React.useCallback(
        (targetIndex: number) => {
            if (!api || isAnimating) return
            setIsAnimating(true)

            const currentIndex = api.selectedScrollSnap()

            if (currentIndex === targetIndex) {
                setIsAnimating(false)
                return
            }

            const direction = currentIndex < targetIndex ? 1 : -1

            if (Math.abs(currentIndex - targetIndex) === 1) {
                if (direction > 0) {
                    api.scrollNext()
                } else {
                    api.scrollPrev()
                }
                setTimeout(() => setIsAnimating(false), 300)
                return
            }

            let step = 0
            const totalSteps = Math.abs(currentIndex - targetIndex)

            const performStep = () => {
                if (step < totalSteps) {
                    if (direction > 0) {
                        api.scrollNext()
                    } else {
                        api.scrollPrev()
                    }

                    step++
                    setTimeout(performStep, 150)
                } else {
                    setIsAnimating(false)
                }
            }

            performStep()
        },
        [api, isAnimating],
    )

    const handleNext = React.useCallback(() => {
        if (!api || isAnimating) return

        if (loop && current === count - 1) {
            animateToIndex(0)
        } else {
            setIsAnimating(true)
            api.scrollNext()
            setTimeout(() => setIsAnimating(false), 300)
        }
    }, [api, isAnimating, loop, current, count, animateToIndex])

    const handlePrev = React.useCallback(() => {
        if (!api || isAnimating) return
        setIsAnimating(true)

        if (loop && current === 0) {
            animateToIndex(count - 1)
        } else {
            api.scrollPrev()
            setTimeout(() => setIsAnimating(false), 300)
        }
    }, [api, isAnimating, loop, current, count, animateToIndex])

    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        setCurrent(api.selectedScrollSnap())

        api.on('select', handleSelect)
        api.on('reInit', handleSelect)

        return () => {
            api.off('select', handleSelect)
            api.off('reInit', handleSelect)
        }
    }, [api])

    // Check if navigation is needed (when all items are visible)
    React.useEffect(() => {
        if (!api) return

        const totalSlides = api.scrollSnapList().length
        const canScrollNext = api.canScrollNext()
        const canScrollPrev = api.canScrollPrev()

        // If we can't scroll in either direction, all items are visible
        setNeedsNavigation(canScrollNext || canScrollPrev || totalSlides > 1)
    }, [api, count, current])

    React.useEffect(() => {
        if (!api || !autoplay) return

        const intervalId = setInterval(() => {
            if (!isAnimating) {
                handleNext()
            }
        }, autoplayInterval)

        return () => clearInterval(intervalId)
    }, [api, autoplay, autoplayInterval, isAnimating, handleNext])

    const renderDots = () => {
        // If maxDots is null or count is less than maxDots, show all dots
        if (!maxDots || count <= maxDots) {
            return Array.from({ length: count }).map((_, index) => (
                <button
                    key={`${idPrefix}-dot-${index}`}
                    className={`size-space-04 rounded-full transition-colors focus:outline-none ${current === index ? 'bg-primary' : 'bg-background-neutral-200'}`}
                    onClick={() => animateToIndex(index)}
                    disabled={isAnimating}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))
        }

        // Calculate dots for condensed view
        const dotsArray = []
        const remainingSlides = count - (maxDots - 1)
        const slidesPerLastDot = Math.max(1, remainingSlides)

        for (let i = 0; i < maxDots; i++) {
            let targetSlide
            let isActive

            if (i === maxDots - 1) {
                // Last dot represents all remaining slides
                targetSlide = count - 1
                isActive = current >= count - slidesPerLastDot
            } else {
                // Other dots represent individual slides
                targetSlide = i
                isActive = current === i
            }

            dotsArray.push(
                <button
                    key={`${idPrefix}-dot-${i}`}
                    className={`size-space-04 rounded-full transition-colors focus:outline-none ${isActive ? 'bg-primary' : 'bg-background-neutral-200'}`}
                    onClick={() => animateToIndex(targetSlide)}
                    disabled={isAnimating}
                    aria-label={`Go to slide ${targetSlide + 1}`}
                />,
            )
        }

        return dotsArray
    }

    return (
        <div className={cn('w-full ', containerClassName)}>
            <CarouselPrimitive
                dir={dir}
                setApi={setApi}
                opts={{
                    align: 'start',
                    loop: false,
                    skipSnaps: false,
                    containScroll: 'trimSnaps',
                    dragFree: false,
                    direction: dir,
                    slidesToScroll,
                }}
                className={cn('relative w-full', className)}>
                <CarouselContent className=" gap-space-04">
                    {React.Children.map(children, (child, index) => (
                        <CarouselItem
                            key={`${idPrefix}-item-${index}`}
                            className={cn('transition-transform duration-300 ', itemClassName)}
                            style={{
                                flex: `0 0 ${calculatedItemWidth}`,
                                maxWidth: calculatedItemWidth,
                            }}>
                            {child}
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {needsNavigation && (
                    <div
                        className={cn({
                            'container mt-space-05 flex items-center justify-between': type === 'multiple',
                        })}>
                        {showArrows && (
                            <div
                                className={cn({
                                    'flex items-center gap-2': type === 'multiple',
                                    'absolute inset-x-space-04 top-1/2 z-0 mx-auto flex max-w-container -translate-y-1/2 items-center justify-between':
                                        type === 'single',
                                })}>
                                <Button
                                    onClick={handlePrev}
                                    colors="primary"
                                    variant={!loop && current === 0 ? 'outline' : 'default'}
                                    size="icon"
                                    aria-label="Previous slide"
                                    className={cn(!loop && current === 0 && '!pointer-events-none')}
                                    // disabled={!loop && current === 0}
                                >
                                    <ChevronRight className="ltr:rotate-180" />
                                </Button>
                                <Button
                                    onClick={handleNext}
                                    colors="primary"
                                    variant={!loop && current === count - 1 ? 'outline' : 'default'}
                                    size="icon"
                                    aria-label="Next slide"
                                    className={cn(!loop && current === count - 1 && '!pointer-events-none')}
                                    // disabled={!loop && current === count - 1}
                                >
                                    <ChevronLeft className="ltr:rotate-180" />
                                </Button>
                            </div>
                        )}
                        {showDots && count > 0 && (
                            <div
                                className={cn('flex  gap-space-02', {
                                    ' items-center': type === 'multiple',
                                    'absolute inset-x-0 bottom-space-08 justify-center': type === 'single',
                                })}>
                                {renderDots()}
                            </div>
                        )}
                    </div>
                )}
            </CarouselPrimitive>
        </div>
    )
}

export { CarouselContent, CarouselItem, CarouselPrimitive, type CarouselApi }
