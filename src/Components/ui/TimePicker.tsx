import { DigitalClockProps } from '@mui/x-date-pickers'
import { VariantProps } from 'class-variance-authority'
import { AccessTime } from 'google-material-icons/outlined'
import moment, { Moment } from 'moment'
import { useState } from 'react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { cn } from '../../Lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { selectVariants } from './select'
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import 'moment/dist/locale/ar-ly'

interface Props extends VariantProps<typeof selectVariants> {
    lang?: 'ar' | 'en'
    placeholder?: string | null
    value: string | null | undefined
    onChange: (time: string | null | undefined) => void
    className?: string
    ampm?: boolean
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
    ...rest
}: Props & Omit<DigitalClockProps<Moment>, 'value' | 'onChange'>) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedTime, setSelectedTime] = useState<string | null | undefined>(value)
    const localeToUse = lang === 'ar' ? 'ar-ly' : 'en'
    const timeFormat = rest.ampm ? 'hh:mm A' : 'HH:mm'
    moment.locale(localeToUse)

    const handleTimeChange = (time: Moment | null) => {
        const formattedTime = time ? time.format(timeFormat) : null
        setSelectedTime(formattedTime)
        onChange(formattedTime)
        setIsOpen(false)
    }

    const momentValue = value ? moment(value, timeFormat) : null

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <button id="date" role="date" className={cn(selectVariants({ variant, colors, size, rounded }), className)} disabled={rest.disabled}>
                    {selectedTime ? (
                        <>{moment(selectedTime, timeFormat).format(timeFormat)}</>
                    ) : (
                        <span className="text-body-01 text-foreground-secondary">{placeholder ?? '00:00'}</span>
                    )}
                    <AccessTime className="size-[20px] shrink-0" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto !rounded border-border-primary p-0 shadow-2xl" align={'start'}>
                <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="w-[300px]">
                    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={localeToUse}>
                        <DigitalClock value={momentValue} onChange={handleTimeChange} {...rest} />
                    </LocalizationProvider>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default TimePicker
