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
  const [localei, setLocalei] = useState<boolean>(false);

  const toggleHandler = (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
    setLocalei(e.currentTarget.checked);
  };
  // eslint-disable-next-line prefer-const

  useEffect(() => {
    if (lang) {
      moment.locale(`${lang}-sa`);
    }

    if (lang === "en" && localei) {
      momentHj.updateLocale("ar-sa", {
        iMonths:
          "Muharram_Safar_Rabi' al-Awwal_Rabi' al-Thani_Jumada al-Ula_Jumada al-Alkhirah_Rajab_Sha’ban_Ramadhan_Shawwal_Thul-Qi’dah_Thul-Hijjah".split(
            "_"
          ),
        iMonthsShort:
          "Muharram_Safar_Rabi' al-Awwal_Rabi' al-Thani_Jumada al-Ula_Jumada al-Alkhirah_Rajab_Sha’ban_Ramadhan_Shawwal_Thul-Qi’dah_Thul-Hijjah".split(
            "_"
          ),
        weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      });
    }
    if (lang === "ar" && localei) {
      momentHj.updateLocale("ar-sa", {
        iMonths: "محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة".split("_"),
        iMonthsShort: "محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      });
    }
  }, [lang, localei]);

  useEffect(() => {
    setLocalei(calendar === "hijri");
  }, [calendar]);

  return (
    <>
      <LocalizationProvider dateAdapter={localei ? AdapterMomentHijri : AdapterMoment}>
        <MuiDatePicker
          inputRef={ref}
          onError={newError => console.log({ newError })}
          format={localei ? "iDD/iMM/iYYYY" : "DD/MM/YYYY"}
          views={["year", "month", "day"]}
          value={localei ? momentHj(value) : moment(value) || null}
          onChange={date => {
            if (onChange) onChange(date);
          }}
          minDate={localei ? momentHj(minDate) : moment(minDate)}
          maxDate={localei ? momentHj(maxDate) : moment(maxDate)}
          slotProps={{
            textField: {
              variant: "outlined",
              error: isError,
              className: "w-full",
            },
          }}
        />
      </LocalizationProvider>

      {!disabled && isToggle && (
        <div className="mt-3 flex justify-between">
          <label className="ml-3 flex items-center">
            <input type="checkbox" className="" id="toggleCalendar" onClick={toggleHandler} />
            <span className="mr-4 whitespace-nowrap">{toggleText}</span>
          </label>
        </div>
      )}
    </>
  );
}
