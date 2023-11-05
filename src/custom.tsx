/* eslint-disable no-empty */
/* eslint-disable no-eval */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PickersCalendarHeader, PickersCalendarHeaderProps, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import "./ar-sa";
import "./en-sa";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePickerToolbar, DatePickerToolbarProps, DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import momentHj, { Moment } from "moment-hijri";
import React, { useCallback, useEffect, useState } from "react";

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
  onChange?: (date: string | null | undefined) => void;
  toggleClassName?: string;
  inputClassName?: string;
}

export function DatePicker({
  ref,
  lang = "en",
  isError,
  disabled,
  maxDate = new Date(2075, 11, 31),
  minDate = new Date(1938, 0, 1),
  onChange,
  value,
  isToggle,
  toggleText = "show hijri",

  toggleClassName,
  inputClassName,
}: Props) {
  const [selected, setSelected] = useState(value);
  const [showH, setShowH] = useState<boolean>(false);

  const ServerDay = useCallback(
    (props: PickersDayProps<Moment> & { showH?: boolean }) => {
      const { day, outsideCurrentMonth, ...other } = props;

      // const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

      return (
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day}>
          <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
            {!outsideCurrentMonth && showH && <span style={{ fontSize: "10px" }}>{momentHj(props.day).iDate()}</span>}
            <span>{day.date()}</span>
          </div>
        </PickersDay>
      );
    },
    [showH]
  );
  const CustomToolbar = useCallback(
    (props: DatePickerToolbarProps<Moment>) => {
      if (!isToggle) return null;

      return (
        <div
          // Pass the className to the root element to get correct layout
          className={props.className}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <label className={toggleClassName}>
              <input type="checkbox" className="" id="toggleCalendar" defaultChecked={showH} onClick={() => setShowH(!showH)} />
              <span>{toggleText}</span>
            </label>
          </div>
          <DatePickerToolbar {...props} />
        </div>
      );
    },
    [showH]
  );
  const CustomHeader = useCallback(
    (props: PickersCalendarHeaderProps<Moment>) => {
      return (
        <div
          // Pass the className to the root element to get correct layout
          className={props.className}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column" }}>
          {showH && <label className={toggleClassName}>{momentHj(props.currentMonth).format("iMMM")}</label>}

          <PickersCalendarHeader {...props} />
        </div>
      );
    },
    [showH]
  );

  useEffect(() => {
    if (lang) {
      momentHj.locale(`${lang}-sa`);
    }
  }, []);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MuiDatePicker
          inputRef={ref}
          onError={newError => console.log({ newError })}
          format={"DD/MM/YYYY"}
          views={["year", "month", "day"]}
          value={selected ? momentHj(selected) : null}
          onChange={date => {
            if (onChange) onChange(date?.toLocaleString());
            setSelected(date?.toLocaleString());
          }}
          minDate={momentHj(minDate)}
          maxDate={momentHj(maxDate)}
          slots={{
            day: ServerDay,
            toolbar: CustomToolbar,
            calendarHeader: CustomHeader,
          }}
          disabled={disabled}
          slotProps={{
            textField: {
              variant: "outlined",
              error: isError,
              className: inputClassName,
            },
            toolbar: {
              toolbarFormat: "YYYY",
              toolbarPlaceholder: "??",
            },

            field: {
              clearable: true,
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
}
