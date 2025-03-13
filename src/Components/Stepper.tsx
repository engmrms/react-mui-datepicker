import * as React from 'react'
import { cn } from '../Lib/utils'

import { cva, VariantProps } from 'class-variance-authority'
import { Check } from 'google-material-icons/outlined'
import ShouldRender from './ShouldRender'

const stepperVariants = cva(`group relative flex shrink-0 items-start justify-start `, {
    variants: {
        variant: {
            circle: 'peer border border-border-primary-default text-text-primary items-center justify-center rounded-full w-space-06 h-space-06 text-body-02 font-medium data-[state=upcoming]:border-border-neutral-primary data-[state=upcoming]:text-border-neutral-primary data-[state=complete]:bg-background-primary  data-[state=complete]:text-icon-oncolor',
            dot: 'peer items-center justify-center rounded-full w-space-06 h-space-06 ',
        },

        orientation: {
            vertical: 'flex-col   ',
            horizontal: 'flex-row  ',
        },
    },
})

type StepperContextType = VariantProps<typeof stepperVariants> & { activeStep: number }

const StepperContext = React.createContext<StepperContextType>({
    variant: 'circle',

    orientation: 'horizontal',
    activeStep: 0,
})

const StepperProvider = ({ activeStep, variant, orientation, children }: React.PropsWithChildren<StepperContextType>) => {
    return <StepperContext.Provider value={{ activeStep, variant, orientation }}>{children}</StepperContext.Provider>
}

interface StepperProps extends React.HTMLAttributes<HTMLDivElement>, StepperContextType {}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
    ({ activeStep = 0, orientation = 'horizontal', variant = 'circle', className, children, ...props }, ref) => {
        const processedChildren = React.useMemo(() => {
            let index = 0
            const count = React.Children.count(children)

            return React.Children.map(children, child => {
                if (React.isValidElement<StepProps>(child) && (child.type as unknown as { displayName: string }).displayName === 'Step') {
                    console.log(index)
                    return React.cloneElement(child, {
                        'data-index': ++index,
                        lastStep: count === index,
                    })
                }
                return child
            })
        }, [children])

        return (
            <div ref={ref} className={cn(stepperVariants({ orientation }), className)} {...props} data-orientation={orientation}>
                <StepperProvider activeStep={activeStep} variant={variant} orientation={orientation}>
                    {processedChildren}
                </StepperProvider>
            </div>
        )
    },
)
Stepper.displayName = 'Stepper'

type StepProps = React.ComponentPropsWithoutRef<'div'> & {
    'data-index'?: number
    lastStep?: boolean
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(({ className, children, ...props }, ref) => {
    const { activeStep, variant } = React.useContext(StepperContext)

    const index = props?.['data-index'] ?? 0

    const state = cn({
        upcoming: activeStep < index,
        current: activeStep === index,
        complete: activeStep > index,
    })

    return (
        <div className="relative flex min-w-space-08 max-w-space-12 flex-col gap-space-02 group-data-[orientation=vertical]:min-h-space-08 group-data-[orientation=vertical]:flex-row ">
            <div ref={ref} data-state={state} className={cn(stepperVariants({ variant }), className)} {...props}>
                <ShouldRender shouldRender={variant === 'circle'}>
                    {state !== 'complete' && <span>{index}</span>}
                    {state === 'complete' && <Check size={20} />}
                </ShouldRender>
                <ShouldRender shouldRender={variant === 'dot'}>
                    <div className="size-space-02 bg-border-neutral-primary group-data-[state=current]:border-2 group-data-[state=current]:border-primary  group-data-[state=complete]:bg-background-primary   rounded-full"></div>
                </ShouldRender>
            </div>
            <div className="me-space-04 hidden flex-col gap-space-01 md:flex ">{children}</div>
            {!props.lastStep && <StepConnector />}
        </div>
    )
})

Step.displayName = 'Step'

const StepTitle = React.forwardRef<HTMLSpanElement, React.HtmlHTMLAttributes<HTMLSpanElement>>(({ className, children, ...props }, ref) => {
    return (
        <span ref={ref} className={cn('text-body-02 font-medium text-text-display', className)} {...props}>
            {children}
        </span>
    )
})

StepTitle.displayName = 'StepTitle'

const StepDescription = React.forwardRef<HTMLParagraphElement, React.HtmlHTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <p ref={ref} className={cn('text-wrap text-body-01 text-text-paragraph-primary', className)} {...props}>
                {children}
            </p>
        )
    },
)

StepDescription.displayName = 'StepDescription'

const StepConnector = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'absolute start-space-06 top-space-04 h-[2px] w-[calc(100%_-_32px)] bg-border-background-neutral group-data-[orientation=vertical]:start-space-04  group-data-[orientation=vertical]:top-space-06  group-data-[orientation=vertical]:h-[calc(100%_-_32px)] group-data-[orientation=vertical]:w-[2px] peer-data-[state=complete]:bg-background-primary',
                className,
            )}
            {...props}>
            {children}
        </div>
    )
})

StepConnector.displayName = 'StepConnector'

export { Step, StepDescription, Stepper, StepTitle }
