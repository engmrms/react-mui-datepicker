import { DateCalendarProps } from '@mui/x-date-pickers'
import { DateRange } from 'google-material-icons/outlined'
import moment, { Moment } from 'moment'
import { useState } from 'react'
import { cn } from '../../Lib/utils'
import useLanguage from '../../Stores/useLanguage'
import { Button, ButtonProps } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

interface Props {
    lang: 'ar' | 'en'
    placeholder?: string | null
    value: Date | string | null | undefined
    onChange: (value: string) => void
    rounded?: ButtonProps['rounded']
    defaultToToday?: boolean
}

export const DatePicker = ({
    placeholder,
    value,
    onChange,
    lang,
    rounded,
    defaultToToday,
    ...rest
}: Props & Omit<DateCalendarProps<Moment>, 'value'>) => {
    const { lang: portalLang } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const dateValue = value && moment(value).isValid() ? moment(value) : defaultToToday ? moment() : null

    const [selectedDate, setSelectedDate] = useState<Moment | null>(dateValue)

    const handleDateChange = (date: Moment) => {
        setIsOpen(false)
        setSelectedDate(date)
        onChange(date.format('MM/DD/yyyy'))
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    id="date"
                    rounded={rounded}
                    variant={'outline'}
                    className={cn(
                        'w-full justify-between !px-space-04 font-normal hover:border-foreground hover:bg-transparent hover:text-foreground',
                        'text-foreground',
                    )}>
                    {selectedDate ? (
                        selectedDate.format(portalLang === 'ar' ? 'YYYY/M/D' : 'D/M/YYYY')
                    ) : (
                        <span className="text-body-02 text-foreground-secondary">
                            {placeholder || (defaultToToday ? moment().format(portalLang === 'ar' ? 'YYYY/M/D' : 'D/M/YYYY') : '')}
                        </span>
                    )}
                    <DateRange className="h-8 w-8" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
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
