/* eslint-disable no-empty */
/* eslint-disable no-eval */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import "./ar-sa";
import "./en-sa";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterMomentHijri } from "@mui/x-date-pickers/AdapterMomentHijri";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import momentHj from "moment-hijri";
import React, { MouseEvent, useEffect, useState } from "react";

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
  toggleText = "switch the picker",
  calendar = "gregrian",
}: Props) {
  const [localei, setLocalei] = useState<boolean>(calendar === "hijri");

  const toggleHandler = (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
    setLocalei(e.currentTarget.checked);
  };
  // eslint-disable-next-line prefer-const

  useEffect(() => {
    if (lang) {
      moment.locale(`${lang}-sa`);
    }

    if (lang === "en" && localei) {
      moment.updateLocale("ar-sa", {
        iMonths: [
          "Muharram",
          "Safar",
          "Rabi' al-Awwal",
          "Rabi' al-Thani",
          "Jumada al-Ula",
          "Jumada al-Alkhirah",
          "Rajab",
          "Sha’ban",
          "Ramadhan",
          "Shawwal",
          "Thul-Qi’dah",
          "Thul-Hijjah",
        ],
        iMonthsShort: [
          "Muharram",
          "Safar",
          "Rabi' al-Awwal",
          "Rabi' al-Thani",
          "Jumada al-Ula",
          "Jumada al-Alkhirah",
          "Rajab",
          "Sha’ban",
          "Ramadhan",
          "Shawwal",
          "Thul-Qi’dah",
          "Thul-Hijjah",
        ],
        weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      });
    }
  }, [lang, localei]);
  return (
    <>
      {localei && (
        <LocalizationProvider dateAdapter={AdapterMomentHijri}>
          <MuiDatePicker
            inputRef={ref}
            onError={newError => console.log({ newError })}
            format="iDD/iMM/iYYYY"
            views={["year", "month", "day"]}
            value={momentHj(value) || null}
            onChange={date => {
              if (onChange) onChange(date);
            }}
            defaultValue={momentHj("2022-04-17")}
            minDate={momentHj(minDate)}
            maxDate={momentHj(maxDate)}
            slotProps={{
              textField: {
                variant: "outlined",
                error: isError,
                className: "w-full",
              },
            }}
          />
        </LocalizationProvider>
      )}
      {!localei && (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <div>
            <MuiDatePicker
              onError={newError => console.log({ newError })}
              inputRef={ref}
              format="DD/MM/YYYY"
              views={["year", "month", "day"]}
              value={value || null}
              onChange={date => {
                if (onChange) onChange(date);
              }}
              minDate={moment(minDate)}
              maxDate={moment(maxDate)}
              slotProps={{
                textField: { variant: "outlined", error: isError, className: "w-full" },
              }}
            />
          </div>
        </LocalizationProvider>
      )}
      {!disabled && isToggle && (
        <div className="mt-3 flex justify-between">
          <label className="ml-3 flex items-center">
            <input type="checkbox" className="" onClick={toggleHandler} />
            <span className="mr-4 whitespace-nowrap">{toggleText}</span>
          </label>
        </div>
      )}
    </>
  );
}
