/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { AdapterMomentHijri } from '@mui/x-date-pickers/AdapterMomentHijri'
import { DateCalendar, PickersCalendarHeader } from '@mui/x-date-pickers/DateCalendar'
import { DateCalendarProps } from '@mui/x-date-pickers/DateCalendar/DateCalendar.types'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import moment, { Moment } from 'moment'
import 'moment/dist/locale/ar-ly'

function Calendar({ ishijri, lang = 'ar', ...props }: { ishijri?: boolean; lang?: 'ar' | 'en' } & DateCalendarProps<Moment>) {
    // useLayoutEffect(() => {
    //     if (lang === 'ar') {
    //         moment.updateLocale('ar-ly', {
    //             weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    //         })
    //     }
    // }, [lang])

    const localeToUse = lang === 'ar' ? 'ar-ly' : 'en'

    return (
        <div dir="rtl">
            <LocalizationProvider dateAdapter={ishijri ? AdapterMomentHijri : AdapterMoment} adapterLocale={localeToUse}>
                <DateCalendar
                    dayOfWeekFormatter={(_, date: moment.Moment) => {
                        return date.format('ddd')
                    }}
                    {...props}
                    minDate={moment(new Date(1938, 0, 1))}
                    maxDate={moment(new Date(2075, 11, 31))}
                />
            </LocalizationProvider>
        </div>
    )
}
Calendar.displayName = 'Calendar'

export { Calendar }
