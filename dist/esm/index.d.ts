import { DateCalendarProps } from '@mui/x-date-pickers';
import { Moment } from 'moment-hijri';
import React from 'react';

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
interface CalendarProps extends Omit<DateCalendarProps<Moment | Date>, "value" | "onChange"> {
    locale: Calendar;
    selected: Date | null | undefined;
    onChange: (date: Date | undefined) => void;
    handleClose: () => void;
    minDate: Date;
    maxDate: Date;
    rest: any;
    lang: "ar" | "en";
}
type Calendar = "gregorian" | "hijri";
declare const Calendar: ({ locale, selected, onChange, handleClose, minDate, maxDate, rest, lang, }: CalendarProps) => React.JSX.Element;

export { Calendar, DatePicker };
