/* eslint-disable react-refresh/only-export-components */
import { PickerValue } from '@mui/x-date-pickers/internals'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/variables.css'
import { DatePicker } from './Components/ui/DatePicker'

let root: ReactDOM.Root | null = null

const container = document.getElementById('root')

const App = () => {
  const [date, setDate] = useState<PickerValue | string>()
  return (
    <div className="grid h-screen w-screen grid-cols-2 place-items-center gap-space-05">
      <div className="w-full">
        <label>Switch Calendar</label>
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          lang="en"
          defaultCalendar="hijri"
          showSwitch
          switchLabel="Gregorian Calendar"
          dir={document.dir as 'ltr' | 'rtl'}
        />
      </div>
      <div className="w-full">
        <label>Hijri Calendar</label>
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          lang="ar"
          defaultCalendar="hijri"
          dir={document.dir as 'ltr' | 'rtl'}
          momentFormat={(lang, calendar) => {
            // console.log(lang, calendar)
            return calendar === 'hijri' ? 'iYYYY/iMM/iDD' : 'DD/MM/YYYY'
          }}
        />
      </div>

      <div className="w-full">
        <label>Gregorian Calendar</label>
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          lang="en"
          dir={document.dir as 'ltr' | 'rtl'}
          momentFormat={(lang, calendar) => {
            // console.log(lang, calendar)
            return calendar === 'hijri' ? 'iYYYY/iMM/iDD' : 'DD/MM/YYYY'
          }}
        />
        <DatePicker value={undefined} onChange={date => setDate(date)} />
      </div>
    </div>
  )
}

if (container) {
  if (!root) {
    root = ReactDOM.createRoot(container)
  }

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
