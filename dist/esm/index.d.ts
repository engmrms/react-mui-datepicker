import moment from 'moment';
import React from 'react';

interface Props {
    lang?: "ar" | "en";
    isError?: boolean;
    isToggle?: boolean;
    calendar?: "gregrian" | "hijri";
    maxDate?: Date;
    minDate?: Date;
    disabled?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    value?: any;
    toggleText?: string;
    onChange?: (date: moment.Moment | null) => void;
}
declare function DatePicker({ ref, lang, isError, disabled, maxDate, minDate, onChange, value, isToggle, toggleText, calendar, }: Props): React.JSX.Element;

export { DatePicker };
