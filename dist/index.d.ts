import "./ar-sa";
import "./en-sa";
import moment from "moment";
import React from "react";
interface Props {
    lang?: "ar" | "en";
    isError?: boolean;
    maxDate?: Date;
    minDate?: Date;
    disabled?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    value?: any;
    onChange?: (date: moment.Moment | null) => void;
}
export declare function DatePicker({ ref, lang, isError, disabled, maxDate, minDate, onChange, value, }: Props): React.JSX.Element;
export {};
