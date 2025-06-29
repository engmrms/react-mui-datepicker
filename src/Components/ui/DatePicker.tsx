import { DateCalendarProps } from '@mui/x-date-pickers'
import { VariantProps } from 'class-variance-authority'
import { DateRange } from 'google-material-icons/outlined'
import moment, { Moment } from 'moment'
import { useState } from 'react'
import { cn } from '../../Lib/utils'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { selectVariants } from './select'
import 'moment/dist/locale/ar-sa'

interface Props extends VariantProps<typeof selectVariants> {
    lang?: 'ar' | 'en'
    placeholder?: string | null
    value: Date | string | null | undefined
    onChange: (value: string) => void
    defaultToToday?: boolean
    className?: string
}

export const DatePicker = ({
    placeholder,
    value,
    onChange,
    lang = 'en',
    rounded,
    defaultToToday,
    variant,
    className,
    colors,
    size,
    ...rest
}: Props & Omit<DateCalendarProps<Moment>, 'value'>) => {
    const [isOpen, setIsOpen] = useState(false)

    const dateValue = value && moment(value).isValid() ? moment(value) : defaultToToday ? moment() : null

    const [selectedDate, setSelectedDate] = useState<Moment | null>(dateValue)
    const dateFormate = lang === 'ar' ? 'YYYY/MM/DD' : 'DD/MM/YYYY'
    const localeToUse = lang === 'ar' ? 'ar-sa' : 'en'
    moment.locale(localeToUse)
    const handleDateChange = (date: Moment) => {
        setIsOpen(false)
        setSelectedDate(date)
        onChange(date.locale('en').format('DD/MM/YYYY'))
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <button id="date" role="date" className={cn(selectVariants({ variant, colors, size, rounded }), className)} disabled={rest.disabled}>
                    {selectedDate ? (
                        selectedDate.format(dateFormate)
                    ) : (
                        <span className="text-body-01 text-foreground-secondary">
                            {placeholder || (defaultToToday ? moment().format(dateFormate) : '')}
                        </span>
                    )}
                    <DateRange className="size-[20px]  shrink-0 " />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto !rounded border-border-primary p-0 shadow-2xl" align="start">
                <>
                    {/* <div>
                <label htmlFor="">To Hijri</label> <Switch onCheckedChange={() => setIshijri(!ishijri)} dir="rtl" />
            </div> */}
                    <Calendar value={selectedDate} lang={lang} onChange={handleDateChange} {...rest} />
                </>
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker
