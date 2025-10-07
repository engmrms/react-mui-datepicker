# React MUI Datepicker

The Date Picker component lets the user select a date and supported to Gregorian Calendar and Hijri(Umm Al-Qura) Calendar.

This package relay on [MUI](https://mui.com/x/react-date-pickers/date-picker/) and [moment hijri](https://www.npmjs.com/package/moment-hijri)

## Version 3.0.0 Refactor

Version 3.0.0 of `react-mui-datepicker` is a major refactor that brings significant improvements and changes to the package:

- **Complete Codebase Refactor:** The entire codebase has been restructured for better maintainability, performance, and scalability.
- **Improved Calendar Support:** Enhanced support for both Gregorian and Hijri (Umm Al-Qura) calendars, with seamless switching between them.
- **Modern React & MUI Integration:** Updated to work with the latest versions of React (v19+) and MUI, ensuring compatibility and leveraging new features.
- **TypeScript Support:** The package is now fully written in TypeScript, providing better type safety and developer experience.
- **Accessibility Enhancements:** Improved accessibility features to ensure the datepicker is usable for all users.
- **Customizable & Themed:** Easier customization and theming, with better integration for custom styles and MUI themes.
- **Simplified API:** The component props and usage have been streamlined for a more intuitive developer experience.
- **Performance Optimizations:** Reduced bundle size and improved rendering performance.

<!-- If you are upgrading from a previous version, please review the updated API and usage examples below, as some props and behaviors may have changed.

For more details, see the [Changelog](https://github.com/engmrms/react-mui-datepicker/releases). -->

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

const App = () => <DatePicker  showSwitch />;

export default App;


```

## Using with Styles

To include the default styles for the datepicker, import the CSS file in your project:

```
import {DatePicker} from 'react-mui-datepicker'
import 'react-mui-datepicker/style.css'

const App = () => <DatePicker  showSwitch />;

export default App;


```

## Available props

The React MUI Datepicker component accepts the following props:

| Prop            | Type                                                         | Description                  |
| --------------- | ------------------------------------------------------------ | ---------------------------- |
| lang            | ar \| en (optional)                                          | default: en                  |
| dir             | rtl \| ltr (optional)                                        |                              |
| maxDate         | Date (optional)                                              |                              |
| minDate         | Date (optional)                                              |                              |
| disabled        | boolean (optional)                                           |                              |
| value           | string \| PickerValue \| Date                                |                              |
| placeholder     | string (optional)                                            |                              |
| onChange        | (date: string \| PickerValue) => void                        |                              |
| defaultToToday  | boolean (optional)                                           |                              |
| showSwitch      | boolean (optional)                                           |                              |
| defaultCalendar | gregrian \| hijri (optional)                                 | default: gregrian            |
| switchLabel     | string (optional)                                            |                              |
| variant         | default \| outline \| lighter (optional)                     |                              |
| colors          | default \| success \| destructive (optional)                 | working with outline variant |
| size            | default \| sm (optional)                                     |                              |
| rounded         | default \| full (optional)                                   |                              |
| momentFormat    | ((lang?: ar \| en, calendar?: hijri \| gregorian) => string) |                              |

## License

**react-mui-datepicker** is available under the [MIT license](https://github.com/engmrms/react-mui-datepicker/LICENSE)
