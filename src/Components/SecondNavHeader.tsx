import { cva, VariantProps } from 'class-variance-authority'
import {
    AccessTime,
    CalendarToday,
    DarkMode,
    ErrorOutline,
    HearingDisabled,
    LightMode,
    Visibility,
    ZoomIn,
    ZoomOut,
} from 'google-material-icons/outlined'
import { createContext, HTMLAttributes, useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { cn, formatterTime } from '../Lib'
import { THEME } from '../Models/enums'
import { accessibilityTools, Badge, BadgeProps, Button, ButtonProps, ShouldRender, strings, useLanguage, useThemeStore } from '../package'

const secondNavHeaderVariants = cva(
    `md:h-space-07    md:px-space-06 px-space-04 md:py-space-01 gap-space-02 py-space-02 flex flex-col md:flex-row [&>svg]:size-[20px] md:items-center md:justify-between `,
    {
        variants: {
            colors: {
                primary: 'bg-background-primary text-text-oncolor-primary',
                gray: 'bg-background-neutral-100 text-text-paragraph-primary',
            },
            hideDivider: {
                true: '',
                false: 'border-b',
            },
        },
        compoundVariants: [
            {
                colors: 'primary',
                hideDivider: false,
                className: 'border-b-border-white-40',
            },
            {
                colors: 'gray',
                hideDivider: false,
                className: 'border-b-border-neutral-primary',
            },
        ],
        defaultVariants: {
            colors: 'primary',
            hideDivider: false,
        },
    },
)

interface SecondNavHeaderProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof secondNavHeaderVariants> {}

const SecondNavHeaderContext = createContext<VariantProps<typeof secondNavHeaderVariants>>({
    colors: 'primary',
    hideDivider: false,
})

const SecondNavHeader = ({ colors, hideDivider, className, ...props }: SecondNavHeaderProps) => {
    return (
        <SecondNavHeaderContext.Provider value={{ colors, hideDivider }}>
            <div
                className={cn(secondNavHeaderVariants({ colors, hideDivider }), className)}
                {...props}
                aria-label="a secondary navigation navbar"
                role="banner"
            />
        </SecondNavHeaderContext.Provider>
    )
}

const SecondNavHeaderContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { dir } = useLanguage()
    const [time, setTime] = useState(formatterTime(dir).format())

    useEffect(() => {
        const timid = setInterval(() => setTime(formatterTime(dir).format()), 1000)
        return () => {
            clearInterval(timid)
        }
    }, [dir])

    return (
        <div className={cn('flex items-center gap-space-04 text-body-02', className)} {...props}>
            <label className="flex items-center gap-space-01" aria-label={`Current date: ${Intl.DateTimeFormat('en-GB').format()}`}>
                <CalendarToday size={20} />
                <span>{Intl.DateTimeFormat('en-GB').format()}</span>
            </label>
            <label className="flex items-center gap-space-01" aria-label={`Current time: ${time}`}>
                <AccessTime size={20} />
                <span>{time}</span>
            </label>
            {props.children}
        </div>
    )
}

const SecondNavHeaderAction = ({ className, hideTrail, ...props }: HTMLAttributes<HTMLDivElement> & { hideTrail?: boolean }) => {
    const { toggleColors, increaseSize, decreaseSize } = accessibilityTools(state => state)
    const context = useContext(SecondNavHeaderContext)
    const btnColor = context.colors === 'gray' ? 'neutral' : 'oncolor'
    const btnClassName = cn({ 'mix-blend-multiply  dark:mix-blend-normal': context.colors === 'gray' })
    const matchs = useMediaQuery('max-width:768px')

    return (
        <div className={cn('flex items-center gap-space-02 text-body-02', className)} {...props}>
            <NavigationSwitchTheme colors={btnColor} />
            <Button
                size={'icon-sm'}
                tooltip={strings.Accessibility.ColorContrast}
                variant={'text'}
                colors={btnColor}
                onClick={toggleColors}
                type="button"
                className={btnClassName}>
                <Visibility />
            </Button>
            <Button
                size={'icon-sm'}
                tooltip={strings.Accessibility.DecreaseFontSize}
                variant={'text'}
                colors={btnColor}
                type="button"
                onClick={decreaseSize}
                className={btnClassName}>
                <ZoomOut />
            </Button>
            <Button
                size={'icon-sm'}
                tooltip={strings.Accessibility.IncreaseFontSize}
                variant={'text'}
                type="button"
                colors={btnColor}
                onClick={increaseSize}
                className={btnClassName}>
                <ZoomIn />
            </Button>
            <Button
                size={'icon-sm'}
                tooltip={strings.Accessibility.VoiceCommands}
                variant={'text'}
                colors={btnColor}
                type="button"
                className={btnClassName}
                onClick={() => {
                    window.open('https://deaf.dga.gov.sa', '_blank', 'noopener,noreferrer')
                }}>
                <HearingDisabled size={20} />
            </Button>
            {props.children}
            <ShouldRender shouldRender={!hideTrail}>
                <TrialVersion size={matchs ? 'sm' : 'default'} />
            </ShouldRender>
        </div>
    )
}

const NavigationSwitchTheme = ({ colors, size = 'icon-sm' }: { colors?: ButtonProps['colors']; size?: 'icon-sm' | 'icon' | 'icon-xs' }) => {
    const { theme, setTheme } = useThemeStore()

    const handleDefaultThemeChange = () => {
        const value = theme === String(THEME.LIGHT) ? String(THEME.DARK) : String(THEME.LIGHT)
        setTheme(value as unknown as THEME)
    }
    useEffect(() => {
        const savedTheme = localStorage.getItem('defaultTheme')
        if (savedTheme) {
            setTheme(savedTheme as unknown as THEME)
            return
        }
        localStorage.setItem('defaultTheme', String(THEME.LIGHT))
    }, [setTheme])

    return (
        <Button
            size={size}
            tooltip={theme === String(THEME.DARK) ? strings.Shared.lightMode : strings.Shared.darkMode}
            variant={'text'}
            colors={colors}
            className={cn({ 'mix-blend-multiply dark:mix-blend-normal': colors === 'gray' })}
            onClick={handleDefaultThemeChange}>
            {theme === String(THEME.DARK) ? <LightMode /> : <DarkMode />}
        </Button>
    )
}

const TrialVersion = ({ variant = 'ghost', colors = 'gray', size = 'default', ...props }: BadgeProps) => {
    return (
        <Badge variant={variant} colors={colors} size={size} {...props}>
            <ErrorOutline />
            {strings.Shared.trialVersion}
        </Badge>
    )
}

export { NavigationSwitchTheme, SecondNavHeader, SecondNavHeaderAction, SecondNavHeaderContent, TrialVersion }
