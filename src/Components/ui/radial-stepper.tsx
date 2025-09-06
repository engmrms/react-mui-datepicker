import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../Lib/utils'
import { strings } from '../../Locales'

const radialStepperVariants = cva('relative flex gap-space-02 items-center', {
    variants: {
        colors: {
            primary: '[&_.bg-circle]:stroke-background-neutral-200 [&_.progress-circle]:stroke-background-primary',
            neutral: '[&_.bg-circle]:stroke-background-neutral-200 [&_.progress-circle]:stroke-background-black',
        },
        onColor: {
            true: '[&_.progress-circle]:stroke-background-surface-oncolor',
            false: '',
        },
    },
    defaultVariants: {
        colors: 'primary',
        onColor: false,
    },
})

// Circle size variants
const circleSizeVariants = cva('', {
    variants: {
        size: {
            120: 'w-[120px] h-[120px] [&_.bg-circle]:stroke-[10px] [&_.progress-circle]:stroke-[10px]',
            80: 'w-[80px] h-[80px] [&_.bg-circle]:stroke-[8px] [&_.progress-circle]:stroke-[8px]',
            64: 'w-[64px] h-[64px] [&_.bg-circle]:stroke-[6px] [&_.progress-circle]:stroke-[6px]',
            48: 'w-[48px] h-[48px] [&_.bg-circle]:stroke-[5px] [&_.progress-circle]:stroke-[5px]',
            40: 'w-[40px] h-[40px] [&_.bg-circle]:stroke-[4px] [&_.progress-circle]:stroke-[4px]',
        },
    },
})

// Text size variants
const textSizeVariants = cva('', {
    variants: {
        size: {
            120: '[&>h3]:text-subtitle-02 [&>h3]:font-semibold [&>p]:text-body-01 [&>span]:text-body-01',
            80: '[&>h3]:text-body-02 [&>h3]:font-semibold [&>p]:text-body-01 [&>span]:text-body-01',
            64: '[&>h3]:text-body-01 [&>h3]:font-semibold [&>p]:text-caption-01 [&>span]:text-caption-01',
            48: '[&>h3]:text-body-01 [&>h3]:font-semibold [&>p]:text-caption-01 [&>span]:text-caption-01',
            40: '[&>h3]:text-caption-01 [&>h3]:font-semibold [&>p]:text-caption-02 [&>span]:text-caption-02',
        },
    },
})

// Center text size variants
const centerTextSizeVariants = cva('', {
    variants: {
        size: {
            120: 'title-01',
            80: 'text-subtitle-01',
            64: 'text-body-01',
            48: 'text-[1.05rem]/[15px]',
            40: 'text-[0.875rem]/[12.5px]',
        },
    },
})

export interface RadialStep {
    id: number
    title?: string
    description?: string
}

export interface RadialStepperProps extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof radialStepperVariants> {
    steps: RadialStep[]
    activeStep: number
    size?: 120 | 80 | 64 | 48 | 40
    showDetails?: boolean
}

const RadialStepper = React.forwardRef<HTMLDivElement, RadialStepperProps>(
    ({ className, steps, activeStep, colors, size = 120, onColor, dir = 'ltr', showDetails = true, ...props }, ref) => {
        // Ensure size is a valid number
        const validSize = size || 120

        // Calculate the progress percentage (0 to 1)
        const progress = steps.length > 0 ? activeStep / steps.length : 0

        // Calculate the stroke dasharray for the progress arc
        const radius = validSize === 120 ? 50 : validSize === 80 ? 35 : validSize === 64 ? 28 : validSize === 48 ? 20 : 18
        const circumference = 2 * Math.PI * radius
        const strokeDasharray = circumference
        const strokeDashoffset = circumference * (1 - progress)

        // Calculate the center position based on size
        const centerX = validSize === 120 ? 60 : validSize === 80 ? 40 : validSize === 64 ? 32 : validSize === 48 ? 24 : 20
        const centerY = validSize === 120 ? 60 : validSize === 80 ? 40 : validSize === 64 ? 32 : validSize === 48 ? 24 : 20

        // Get current step info
        const currentStepInfo = steps?.[activeStep - 1] || steps[0]

        return (
            <div
                dir={dir}
                ref={ref}
                role="progressbar"
                aria-label={`Step ${activeStep} of ${steps.length}`}
                aria-valuenow={activeStep}
                aria-valuemin={1}
                aria-valuemax={steps.length}
                aria-valuetext={`Step ${activeStep} of ${steps.length}: ${currentStepInfo?.title || ''}`}
                className={cn(radialStepperVariants({ colors, onColor, className }))}
                {...props}>
                {/* Stepper Circle */}
                <div className={cn('relative flex-shrink-0', circleSizeVariants({ size }))}>
                    <svg
                        width={validSize}
                        height={validSize}
                        viewBox={`0 0 ${validSize} ${validSize}`}
                        className="-rotate-90 transform"
                        role="img"
                        aria-label={`Progress circle showing ${Math.round(progress * 100)}% completion`}>
                        {/* Background circle */}
                        <circle cx={centerX} cy={centerY} r={radius} fill="none" className="bg-circle opacity-60" aria-hidden="true" />

                        {/* Progress circle */}
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={radius}
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={dir === 'rtl' ? strokeDashoffset : -strokeDashoffset}
                            className="progress-circle transition-all duration-500 ease-in-out"
                            aria-label={`Progress: ${Math.round(progress * 100)}%`}
                        />
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span
                            className={cn('font-bold text-text-paragraph-primary', centerTextSizeVariants({ size }))}
                            aria-label={`Current step: ${activeStep} of ${steps.length}`}>
                            {activeStep} {strings.Shared.Of} {steps?.length}
                        </span>
                    </div>
                </div>

                {/* Step Description */}
                {currentStepInfo && showDetails && (
                    <div
                        className={cn('flex flex-1 flex-col gap-space-01', textSizeVariants({ size }))}
                        aria-live="polite"
                        aria-label={`Step details for step ${activeStep}`}>
                        <h3 className="text-text-display">{currentStepInfo?.title}</h3>
                        {currentStepInfo?.description && <p className="text-text-paragraph-primary">{currentStepInfo?.description}</p>}
                    </div>
                )}
            </div>
        )
    },
)

RadialStepper.displayName = 'RadialStepper'

export { RadialStepper }
