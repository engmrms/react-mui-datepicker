import { useState, useMemo } from 'react'
import { format, isMatch, parse } from 'date-fns'
import { arSA, enUS } from 'date-fns/locale'
import { Popover, PopoverTrigger, PopoverContent } from './popover'
import { Button } from './button'
import { AccessTime, Check } from 'google-material-icons/outlined'
import { VariantProps } from 'class-variance-authority'
import { selectVariants } from './select'
import { cn } from '../../package'

interface Props extends VariantProps<typeof selectVariants> {
    lang?: 'ar' | 'en'
    placeholder?: string | null
    value?: string | null
    onChange: (time: string) => void
    className?: string
    ampm?: boolean
    disabled?: boolean
    timeStep?: number
}

export type TimePickerProps = Props

const locales = {
    en: enUS,
    ar: arSA,
}

const getTimeOptions = (ampm?: boolean, lang: 'ar' | 'en' = 'en', timeStep: number = 15) => {
    const times: { label: string; value: string }[] = []
    const locale = locales[lang]

    if (ampm) {
        // Iterate through all hours and minutes to generate options
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += timeStep) {
                const date = new Date(2000, 0, 1, h, m)
                // The value is always in English (hh:mm a) for consistency
                const value = format(date, 'hh:mm a', { locale: enUS })
                // The label is localized
                const label = format(date, 'hh:mm a', { locale: locale })
                times.push({ label, value })
            }
        }
    } else {
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += timeStep) {
                const date = new Date(2000, 0, 1, h, m)
                const value = format(date, 'HH:mm', { locale: enUS })
                const label = format(date, 'HH:mm', { locale: locale })
                times.push({ label, value })
            }
        }
    }
    return times
}

function parseTime(value: string | null | undefined, ampm: boolean) {
    if (!value) return new Date(2000, 0, 1, 0, 0)
    let date: Date | null = null
    const formatString = ampm ? 'hh:mm a' : 'HH:mm'

    // The value is always in English, so we parse it with enUS locale
    if (isMatch(value, formatString, { locale: enUS })) {
        date = parse(value, formatString, new Date(2000, 0, 1), { locale: enUS })
    }

    if (!date || isNaN(date.getTime())) return new Date(2000, 0, 1, 0, 0)
    return date
}

export const TimePicker = ({
    placeholder,
    value,
    onChange,
    rounded,
    lang = 'en',
    variant,
    className,
    colors,
    size,
    timeStep = 15,
    ampm,
    disabled,
}: TimePickerProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const timeOptions = useMemo(() => getTimeOptions(ampm, lang, timeStep), [ampm, lang, timeStep])

    const handleSelect = (selected: string) => {
        setIsOpen(false)
        onChange(selected)
    }

    const date = useMemo(() => parseTime(value, !!ampm), [value, ampm])

    // Use `format` with the correct locale to display the value
    const displayValue = value ? (ampm ? format(date, 'hh:mm a', { locale: locales[lang] }) : format(date, 'HH:mm', { locale: locales[lang] })) : null

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <button id="date" role="date" className={cn(selectVariants({ variant, colors, size, rounded }), className)} disabled={disabled}>
                    {displayValue ? (
                        <>{displayValue}</>
                    ) : (
                        <span className="text-body-01 text-foreground-secondary">
                            {placeholder ?? format(new Date(2000, 0, 1, 12, 0), ampm ? 'hh:mm a' : 'HH:mm', { locale: locales[lang] })}
                        </span>
                    )}
                    <AccessTime className="size-[20px] shrink-0" />
                </button>
            </PopoverTrigger>
            <PopoverContent
                className="max-h-[230px] min-w-[300px] overflow-auto rounded border p-space-04 shadow-2xl"
                align={lang === 'ar' ? 'end' : 'start'}>
                <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="flex flex-col gap-space-02">
                    {timeOptions.map(option => (
                        <Button
                            key={option.value}
                            colors={'neutral'}
                            variant="text"
                            rounded={'default'}
                            className="flex justify-between font-normal"
                            onClick={() => handleSelect(option.value)}>
                            {option.label}
                            {option.value === value && <Check />}
                        </Button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default TimePicker
