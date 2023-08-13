# React MUI Datepicker

The Date Picker component lets the user select a date and supported to Gregorian Calendar and Hijri(Umm Al-Qura) Calendar.

This package relay on [MUI](https://mui.com/x/react-date-pickers/date-picker/) and [moment hijri](https://www.npmjs.com/package/moment-hijri)

## How to use

You can now import `DatePicker` as a normal package installed from npm like so:

```
import {DatePicker} from 'react-mui-datepicker'
...
```

## Available props

```

lang: ar | en (optional) default en

isError: boolean (optional)
maxDate: Date (optional)
minDate: Date (optional)
disabled: boolean (optional)
ref: React.Ref<HTMLInputElement> (optional)
value: string (optional)
onChange: (date: Moment | null) => void (optional)

```
