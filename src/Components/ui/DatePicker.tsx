import DateRange from 'google-material-icons/outlined/DateRange'

import { DateCalendarProps } from '@mui/x-date-pickers'
import moment, { Moment } from 'moment'
import { useState } from 'react'
import { cn } from '../../Lib/utils'
import { Button, ButtonProps } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import useLanguage from '../../Stores/useLanguage'

interface Props {
    lang: 'ar' | 'en'
    placeholder?: string
    value: Date | string | null
    onChange: (value: string) => void
    rounded?: ButtonProps['rounded']
}

const DatePicker = ({ placeholder, value, onChange, lang, rounded, ...rest }: Props & Omit<DateCalendarProps<Moment>, 'value'>) => {
    const { lang: portalLang } = useLanguage()
    const [isOpen, setIsopen] = useState(false)
    return (
        <Popover open={isOpen} onOpenChange={op => setIsopen(op)}>
            <PopoverTrigger asChild>
                <Button
                    id="date"
                    rounded={rounded}
                    variant={'outline'}
                    className={cn(
                        'w-full  justify-between !px-space-04 font-normal hover:border-foreground  hover:bg-transparent hover:text-foreground',
                        'text-foreground',
                    )}>
                    {value ? (
                        moment(value).format(portalLang === 'ar' ? 'YYYY/M/D' : 'D/M/YYYY')
                    ) : (
                        <span className="text-body-02 text-foreground-secondary">{placeholder}</span>
                    )}
                    <DateRange className="h-8 w-8" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <>
                    {/* <div>
                <label htmlFor="">To Hijri</label> <Switch onCheckedChange={() => setIshijri(!ishijri)} dir="rtl" />
            </div> */}
                    <Calendar
                        value={moment(value)}
                        lang={lang}
                        onChange={(d: Moment) => {
                            setIsopen(false)
                            onChange(d.format('MM/DD/yyyy'))
                        }}
                        {...rest}
                    />
                </>
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker
