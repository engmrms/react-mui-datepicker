import { DateCalendarProps } from '@mui/x-date-pickers';
import { Moment } from 'moment-hijri';
import React from 'react';

type Calendar = "gregorian" | "hijri";
interface Props extends Omit<DateCalendarProps<Moment | Date>, "value" | "onChange"> {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    disabled?: boolean;
    calendar?: Calendar;
    lang?: "ar" | "en";
    isToggle?: boolean;
    placeholder?: string;
    defaultToToday?: boolean;
    dateFormat?: string;
    switchText?: string;
    minDate?: Date;
    maxDate?: Date;
    toggleElement?: React.ReactNode;
    switchElement?: (onCheckedChange: (checked: boolean) => void) => React.ReactNode;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    showTodayButton?: boolean;
    showClearButton?: boolean;
    autoClose?: boolean;
}
declare function DatePicker({ lang, onChange, value, isToggle, switchText, calendar, placeholder, defaultToToday, dateFormat, disabled, maxDate, minDate, toggleElement, switchElement, ...rest }: Props): React.JSX.Element;

export { DatePicker };
