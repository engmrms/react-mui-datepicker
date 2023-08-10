# React MUI Datepicker

The Date Picker component lets the user select a date and support Gregorian Calendar and Hijri(Umm Al-Qura) Calendar.

## How to use

Clone this repo to your local computer, then run:

- `npm install && npm run build`

- To make this component available to other projects on your local computer, run `yarn link`.
- Then go to the project where you want to use this package and run `yarn link "DatePicker"`.

Finally, to fix the multiple copies of React bug that shows up with linked React packages:

- navigate to the root of the `DatePicker` package
- run `npm link "../path/to/your/project"`

You can now import `DatePicker` as a normal package installed from npm like so:

```
import DatePicker from 'react-mui-datepicker'
...
```

You can also import the type definitions if you're using TypeScript like so:

```
import DatePicker from 'react-mui-datepicker'
...
```

## Available props

```

lang: ar | en (optional) default en
name: string
errors: any (optional)
maxDate: Date (optional)
minDate: Date (optional)
disabled: boolean (optional)
ref: React.Ref<HTMLInputElement> (optional)
value: string (optional)
onChange: (date: Moment | null) => void (optional)

```

To customise this component, pass in a class name to the `className` prop and style that class name in your custom CSS.

```

// your-component.js
import DatePicker from 'react-mui-datepicker'

...
<Dummy className="dummy" />
...

// your-component.css
.dummy {
  color: white;
  background-color: purple;
}

```
