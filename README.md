# React MUI Datepicker

The Date Picker component lets the user select a date and supported to Gregorian Calendar and Hijri(Umm Al-Qura) Calendar.

This package relay on [MUI](https://mui.com/x/react-date-pickers/date-picker/) and [moment hijri](https://www.npmjs.com/package/moment-hijri)

## How to use

You can now import `DatePicker` as a normal package installed from npm like so:

```
import {DatePicker} from 'react-mui-datepicker'

const App = () => <DatePicker  />;

export default App;

```

to switch between calendars

```
import {DatePicker} from 'react-mui-datepicker'

const App = () => <DatePicker  isToggle />;

export default App;


```

## Available props

The React MUI Datepicker component accepts the following props:

| Prop            | Type                                                               | Description       |
| --------------- | ------------------------------------------------------------------ | ----------------- |
| lang            | ar or en (optional)                                                | default: en       |
| isError         | boolean (optional)                                                 |                   |
| maxDate         | Date (optional)                                                    |                   |
| minDate         | Date (optional)                                                    |                   |
| disabled        | boolean (optional)                                                 |                   |
| ref             | React.Ref<HTMLInputElement> (optional)                             |                   |
| value           | string (optional)                                                  |                   |
| onChange        | (date: Moment or null) => void (optional)                          |                   |
| toggleText      | string (optional)                                                  |                   |
| isToggle        | boolean (optional)                                                 |                   |
| calendar        | "gregrian" or "hijri" (optional)                                   | default: gregrian |
| toggleClassName | string (optional)                                                  |                   |
| inputClassName  | string (optional)                                                  |                   |
| toggleElement   | ReactNode (optional)                                               |                   |
| switchElement   | (onCheckedChange: (checked) => void) => React.ReactNode (optional) |                   |
| switchText      | string (optional)                                                  |                   |

## License

**react-mui-datepicker** is available under the [MIT license](https://github.com/engmrms/react-mui-datepicker/LICENSE)
