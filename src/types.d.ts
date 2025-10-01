import { DateCalendarProps } from "@mui/x-date-pickers";
import { Moment } from "moment-hijri";
import React from "react";

export type Calendar = "gregorian" | "hijri";

export interface DatePickerProps extends Omit<DateCalendarProps<Moment>, "value"> {
  lang?: "ar" | "en";
  isToggle?: boolean;
  calendar?: Calendar;
  switchText?: string;
  onChange?: (date: string | null) => void;
  placeholder?: string;
  defaultToToday?: boolean;
  dateFormat?: string;
  toggleElement?: React.ReactNode;
  switchElement?: React.ReactNode;
  disabled?: boolean;
  minDate?: Moment;
  maxDate?: Moment;
  value?: Moment;
}

declare module "react-mui-datepicker" {
  export const DatePicker: React.FC<DatePickerProps>;
}
