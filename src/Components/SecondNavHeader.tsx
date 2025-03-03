import { cva, VariantProps } from 'class-variance-authority'
import { AccessTime, CalendarToday, DarkMode, HearingDisabled, LightMode, Visibility, ZoomIn, ZoomOut } from 'google-material-icons/outlined'
import { createContext, HTMLAttributes, useContext, useEffect, useState } from 'react'
import { cn, formatterTime } from '../Lib'
import { THEME } from '../Models/enums'
import { accessibilityTools, Button, strings, useLanguage, useThemeStore } from '../package'

const secondNavHeaderVariants = cva(`h-space-07 px-space-06 py-space-01 flex [&>svg]:size-[20px] items-center md:justify-between justify-center`, {
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
})

interface SecondNavHeaderProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof secondNavHeaderVariants> {}

const SecondNavHeaderContext = createContext<VariantProps<typeof secondNavHeaderVariants>>({
    colors: 'primary',
    hideDivider: false,
})

const SecondNavHeader = ({ colors, hideDivider, className, ...props }: SecondNavHeaderProps) => {
    return (
        <SecondNavHeaderContext.Provider value={{ colors, hideDivider }}>
            <div className={cn(secondNavHeaderVariants({ colors, hideDivider }), className)} {...props} aria-label="Second Navigation Header" />
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
        <div className={cn('hidden items-center gap-space-04 text-body-02 md:flex', className)} {...props}>
            <span className="flex items-center gap-space-01" aria-label={`Current date: ${Intl.DateTimeFormat('en-GB').format()}`}>
                <CalendarToday size={20} />
                <span>{Intl.DateTimeFormat('en-GB').format()}</span>
            </span>
            <span className="flex items-center gap-space-01" aria-label={`Current time: ${time}`}>
                <AccessTime size={20} />
                <span>{time}</span>
            </span>
            {props.children}
        </div>
    )
}

const SecondNavHeaderAction = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { toggleColors, increaseSize, decreaseSize } = accessibilityTools(state => state)
    const context = useContext(SecondNavHeaderContext)
    const btnColor = context.colors === 'gray' ? 'neutral' : 'oncolor'
    const btnClassName = cn({ 'mix-blend-multiply  dark:mix-blend-normal': context.colors === 'gray' })

    return (
        <div className={cn('flex items-center gap-space-02 text-body-02', className)} {...props}>
            <NavigationSwitchTheme />
            <Button
                size={'icon-sm'}
                tooltip={strings.Accessibility.ColorContrast}
                variant={'text'}
                colors={btnColor}
                onClick={toggleColors}
                className={btnClassName}>
                <Visibility />
            </Button>
            <Button
                size={'icon-sm'}
                tooltip={strings.Accessibility.DecreaseFontSize}
                variant={'text'}
                colors={btnColor}
                onClick={decreaseSize}
                className={btnClassName}>
                <ZoomOut />
            </Button>
            <Button
                size={'icon-sm'}
                tooltip={strings.Accessibility.IncreaseFontSize}
                variant={'text'}
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
                className={btnClassName}
                onClick={() => {
                    window.open('https://deaf.dga.gov.sa', '_blank', 'noopener,noreferrer')
                }}>
                <HearingDisabled size={20} />
            </Button>
            {props.children}
        </div>
    )
}

const NavigationSwitchTheme = () => {
    const { theme, setTheme } = useThemeStore()
    const context = useContext(SecondNavHeaderContext)
    const btnColor = context.colors === 'gray' ? 'neutral' : 'oncolor'

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
            size={'icon-sm'}
            tooltip={theme === String(THEME.DARK) ? strings.Shared.lightMode : strings.Shared.darkMode}
            variant={'text'}
            colors={btnColor}
            className={cn({ 'mix-blend-multiply  dark:mix-blend-normal': context.colors === 'gray' })}
            onClick={handleDefaultThemeChange}>
            {theme === String(THEME.DARK) ? <LightMode /> : <DarkMode />}
        </Button>
    )
}

export { NavigationSwitchTheme, SecondNavHeader, SecondNavHeaderAction, SecondNavHeaderContent }
