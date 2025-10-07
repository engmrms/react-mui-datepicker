/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { AdapterMomentHijri } from '@mui/x-date-pickers/AdapterMomentHijri'
import type { DateCalendarProps } from '@mui/x-date-pickers/DateCalendar'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import moment from 'moment-hijri'
import 'moment/locale/ar-ly'

function Calendar({
  ishijri,
  lang = 'ar',
  dir = 'ltr',
  ...props
}: { ishijri?: boolean; lang?: 'ar' | 'en'; dir?: 'ltr' | 'rtl' } & DateCalendarProps) {
  const localeToUse = lang === 'ar' ? 'ar-ly' : 'en'

  if (lang === 'en' && ishijri) {
    moment.updateLocale('ar-sa', {
      iMonths:
        "Muharram12_Safar_Rabi' al-Awwal_Rabi' al-Thani_Jumada al-Ula_Jumada al-Alkhirah_Rajab_Sha'ban_Ramadhan_Shawwal_Thul-Qi'dah_Thul-Hijjah".split(
          '_',
        ),
      iMonthsShort:
        "Muharram12_Safar_Rabi' al-Awwal_Rabi' al-Thani_Jumada al-Ula_Jumada al-Alkhirah_Rajab_Sha'ban_Ramadhan_Shawwal_Thul-Qi'dah_Thul-Hijjah".split(
          '_',
        ),
    })
  }

  if (lang === 'ar' && ishijri) {
    moment.updateLocale('ar-sa', {
      iMonths:
        'محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split(
          '_',
        ),
      iMonthsShort:
        'محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_'),
    })
  }

  return (
    <div dir={dir}>
      <LocalizationProvider
        dateAdapter={ishijri ? AdapterMomentHijri : AdapterMoment}
        adapterLocale={localeToUse}>
        <DateCalendar
          dayOfWeekFormatter={(date: moment.Moment) => {
            return date.locale(localeToUse).format('ddd')
          }}
          value={props.value ? moment(props.value) : moment()}
          onChange={value => {
            props.onChange?.(value)
          }}
          minDate={moment(new Date(1938, 0, 1))}
          maxDate={moment(new Date(2075, 11, 31))}
          {...props}
        />
      </LocalizationProvider>
    </div>
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
