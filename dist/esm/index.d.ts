import React from 'react';

type Calendar = "gregrian" | "hijri";
interface Props {
    lang?: "ar" | "en";
    isError?: boolean;
    isToggle?: boolean;
    calendar?: Calendar;
    maxDate?: Date;
    minDate?: Date;
    disabled?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    value?: any;
    toggleText?: string;
    onChange?: (date: string | null) => void;
    toggleClassName?: string;
    inputClassName?: string;
}
declare function DatePicker({ ref, lang, isError, disabled, maxDate, minDate, onChange, value, isToggle, toggleText, calendar, toggleClassName, inputClassName, }: Props): React.JSX.Element;

export { DatePicker };
