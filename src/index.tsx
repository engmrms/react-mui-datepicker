import "moment/dist/locale/ar-ly";
import "./ar-sa";

import {
  Button,
  createTheme,
  Popover,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { DateCalendar, DateCalendarProps } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterMomentHijri } from "@mui/x-date-pickers/AdapterMomentHijri";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import momentHj, { Moment } from "moment-hijri";
import React, { useEffect, useState } from "react";
const theme = createTheme({
  palette: {
    primary: {
      light: "#88D8AD",
      main: "#1B8354",
      dark: "#25935F",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#DBA102",
      dark: "#F5BD02",
      contrastText: "#000",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "center",
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: "12px 0 0 0",
          maxHeight: "unset",
        },
        labelContainer: {
          fontSize: "16px",
          lineHeight: "24px",
          marginRight: "0",
          marginInlineEnd: "auto",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      MuiDayCalendar: {
        styleOverrides: {
          root: {
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
      },
    },
  } as any,
});

type Calendar = "gregorian" | "hijri";
enum CalendarType {
  GREGORIAN = "gregorian",
  HIJRI = "hijri",
}

interface Props extends Omit<DateCalendarProps<Moment | Date>, "value" | "onChange"> {
  // Core functionality
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: boolean;

  // Calendar configuration
  calendar?: Calendar;
  lang?: "ar" | "en";
  isToggle?: boolean;

  // Display & formatting
  placeholder?: string;
  defaultToToday?: boolean;
  dateFormat?: string; // Fixed typo from dateFormate
  switchText?: string;

  // Date constraints
  minDate?: Date;
  maxDate?: Date;

  // Custom elements for design system flexibility
  toggleElement?: React.ReactNode;
  switchElement?: (onCheckedChange: (checked: boolean) => void) => React.ReactNode; // Fixed casing for consistency

  // Accessibilit
  ariaLabel?: string;
  ariaDescribedBy?: string;

  // Advanced features
  showTodayButton?: boolean;
  showClearButton?: boolean;
  autoClose?: boolean;
}

const updateLocale = (lang: "ar" | "en", locale: Calendar) => {
  // Set base locale for moment-hijri
  if (lang) {
    momentHj.locale(`${lang}-sa`);
  }

  if (lang === "en" && locale === CalendarType.HIJRI) {
    momentHj.updateLocale("ar-sa", {
      iMonths:
        "Muharram12_Safar_Rabi' al-Awwal_Rabi' al-Thani_Jumada al-Ula_Jumada al-Alkhirah_Rajab_Sha'ban_Ramadhan_Shawwal_Thul-Qi'dah_Thul-Hijjah".split(
          "_"
        ),
      iMonthsShort:
        "Muharram12_Safar_Rabi' al-Awwal_Rabi' al-Thani_Jumada al-Ula_Jumada al-Alkhirah_Rajab_Sha'ban_Ramadhan_Shawwal_Thul-Qi'dah_Thul-Hijjah".split(
          "_"
        ),
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    });
  }

  if (lang === "ar" && locale === CalendarType.HIJRI) {
    momentHj.updateLocale("ar-sa", {
      iMonths:
        "محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة".split(
          "_"
        ),
      iMonthsShort:
        "محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysShort: ["احد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    });
  }
};

function DatePicker({
  lang = "en",
  onChange,
  value,
  isToggle,
  switchText,
  calendar = "gregorian",
  placeholder = "Select Date",
  defaultToToday = true,
  dateFormat = "DD/MM/YYYY",
  disabled,
  maxDate = new Date(2075, 11, 31),
  minDate = new Date(1938, 0, 1),
  toggleElement,
  switchElement,
  ...rest
}: Props) {
  const [locale, setLocale] = useState<Calendar>(calendar);
  const [selected, setSelected] = useState<Date | null | undefined>(value);
  const [toggle, setToggle] = useState<boolean>(calendar === CalendarType.HIJRI);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const switchCalendarText = switchText || (lang === "ar" ? "تقويم هجري" : "Gregorian Calendar");

  // Sync internal state with external value prop
  useEffect(() => {
    setSelected(value || null);
  }, [value]);

  const toggleHandler = (checked: boolean) => {
    if (calendar === CalendarType.GREGORIAN)
      setLocale(checked ? CalendarType.HIJRI : CalendarType.GREGORIAN);
    if (calendar === CalendarType.HIJRI) {
      setLocale(checked ? CalendarType.GREGORIAN : CalendarType.HIJRI);
    }
    setToggle(checked);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const toggleContent = (
    <>
      <span>
        {selected
          ? momentHj(selected).format(dateFormat)
          : placeholder || (defaultToToday ? momentHj().format(dateFormat) : "")}
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#1f1f1f"
      >
        <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
      </svg>
    </>
  );

  if (value && !momentHj(value).isValid()) {
    return <Typography variant="body1">Invalid date</Typography>;
  }

  return (
    <ThemeProvider theme={theme}>
      {toggleElement ? (
        React.cloneElement(toggleElement as React.ReactElement, {
          id: "date",
          role: "date",
          "aria-describedby": id,
          onClick: handleClick,
          children: toggleContent,
        })
      ) : (
        <Button id="date" role="date" aria-describedby={id} onClick={handleClick}>
          {toggleContent}
        </Button>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {!disabled && isToggle && (
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
            borderBottom={1}
            borderColor={"divider"}
            pt={1}
            pb={2}
          >
            <Typography variant="body1">{switchCalendarText}</Typography>
            {switchElement ? (
              React.cloneElement(switchElement(toggleHandler) as React.ReactElement, {
                checked: toggle,

                "aria-label": "toggle calendar",
              })
            ) : (
              <Switch
                checked={toggle}
                onChange={(e) => toggleHandler(e.target.checked)}
                aria-label="toggle calendar"
              />
            )}
          </Stack>
        )}

        <CalendarPure
          locale={locale}
          selected={selected}
          onChange={(date) => {
            if (onChange) onChange(date);
            setSelected(date);
          }}
          handleClose={handleClose}
          minDate={minDate}
          maxDate={maxDate}
          rest={rest}
          lang={lang}
        />
      </Popover>
    </ThemeProvider>
  );
}

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

const Calendar = ({
  locale,
  selected,
  onChange,
  handleClose,
  minDate,
  maxDate,
  rest,
  lang,
}: CalendarProps) => {
  updateLocale(lang, locale);
  return (
    <ThemeProvider theme={theme}>
      <CalendarPure
        locale={locale}
        selected={selected}
        onChange={onChange}
        handleClose={handleClose}
        minDate={minDate}
        maxDate={maxDate}
        rest={rest}
        lang={lang}
      />
    </ThemeProvider>
  );
};

const CalendarPure = ({
  locale,
  selected,
  onChange,
  handleClose,
  minDate,
  maxDate,
  rest,
  lang,
}: CalendarProps) => {
  const localeToUse = lang === "ar" ? "ar-ly" : "en";
  updateLocale(lang, locale);
  return (
    <>
      {locale === CalendarType.HIJRI && (
        <LocalizationProvider dateAdapter={AdapterMomentHijri}>
          <DateCalendarComponent
            value={selected ? momentHj(selected) : undefined}
            onChange={(date) => {
              if (onChange) onChange(date);
            }}
            handleClose={handleClose}
            minDate={momentHj(minDate)}
            maxDate={momentHj(maxDate)}
            {...rest}
          />
        </LocalizationProvider>
      )}

      {locale === CalendarType.GREGORIAN && (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={localeToUse}>
          <DateCalendarComponent
            value={selected ? momentHj(selected) : undefined}
            onChange={(date) => {
              if (onChange) onChange(date);
            }}
            handleClose={handleClose}
            minDate={momentHj(minDate)}
            maxDate={momentHj(maxDate)}
            {...rest}
          />
        </LocalizationProvider>
      )}
    </>
  );
};

interface DateCalendarComponentProps
  extends Omit<DateCalendarProps<Moment | Date>, "value" | "onChange"> {
  value?: Date | Moment;
  onChange?: (date: Date | undefined) => void;
  handleClose?: () => void;
}

const DateCalendarComponent = ({
  value,
  onChange,
  handleClose,
  minDate,
  maxDate,
  ...rest
}: DateCalendarComponentProps) => {
  return (
    <DateCalendar
      views={["year", "day"]}
      value={value}
      onChange={(date, context) => {
        if (onChange) onChange(date.toDate());

        if (context === "finish") {
          handleClose?.();
        }
      }}
      dayOfWeekFormatter={(_, date: moment.Moment) => {
        return date.format("ddd");
      }}
      minDate={minDate}
      maxDate={maxDate}
      showDaysOutsideCurrentMonth
      {...rest}
    />
  );
};

export { Calendar, DatePicker };
