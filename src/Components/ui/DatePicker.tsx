import DateRange from 'google-material-icons/outlined/DateRange'

import moment, { Moment } from 'moment'
import { useState } from 'react'
import { cn } from '../../Lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

interface Props {
    lang: 'ar' | 'en'
    placeholder?: string
    value: string
    onChange: (value: string) => void
}

const DatePicker = ({ placeholder, value, onChange, lang }: Props) => {
    const [isOpen, setIsopen] = useState(false)
    return (
        <Popover open={isOpen} onOpenChange={op => setIsopen(op)}>
            <PopoverTrigger asChild>
                <Button
                    id="date"
                    variant={'outline'}
                    className={cn(
                        'w-full  justify-between hover:border-foreground hover:text-foreground hover:bg-transparent  font-normal !px-space-04',
                        'text-foreground',
                    )}>
                    {value ? moment(value).format('DD/MM/yyyy') : <span className="text-body-02 text-foreground-secondary">{placeholder}</span>}
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
                    />
                </>
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker
