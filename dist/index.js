var moment = require('moment');
var AdapterMoment = require('@mui/x-date-pickers/AdapterMoment');
var AdapterMomentHijri = require('@mui/x-date-pickers/AdapterMomentHijri');
var DatePicker$1 = require('@mui/x-date-pickers/DatePicker');
var LocalizationProvider = require('@mui/x-date-pickers/LocalizationProvider');
var momentHj = require('moment-hijri');
var React = require('react');

//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
var symbolMap$1 = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
}, numberMap$1 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0",
}, pluralForm = function (n) {
    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            if (n % 100 >= 3 && n % 100 <= 10) {
                return 3;
            }
            if (n % 100 >= 11) {
                return 4;
            }
            return 5;
    }
}, plurals = {
    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"],
}, pluralize = function (u) {
    return function (number, withoutSuffix) {
        var f = pluralForm(number);
        var str = plurals[u][pluralForm(number)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
    };
}, months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
moment.defineLocale("ar-sa", {
    months: months,
    monthsShort: months,
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/\u200FM/\u200FYYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm",
    },
    meridiemParse: /[ص م]/,
    isPM: function (input) {
        return "م" === input;
    },
    meridiem: function (hour) {
        if (hour < 12) {
            return "ص";
        }
        else {
            return "م";
        }
    },
    calendar: {
        sameDay: "[اليوم عند الساعة] LT",
        nextDay: "[غدًا عند الساعة] LT",
        nextWeek: "dddd [عند الساعة] LT",
        lastDay: "[أمس عند الساعة] LT",
        lastWeek: "dddd [عند الساعة] LT",
        sameElse: "L",
    },
    relativeTime: {
        future: "بعد %s",
        past: "منذ %s",
        s: pluralize("s"),
        ss: pluralize("s"),
        m: pluralize("m"),
        mm: pluralize("m"),
        h: pluralize("h"),
        hh: pluralize("h"),
        d: pluralize("d"),
        dd: pluralize("d"),
        M: pluralize("M"),
        MM: pluralize("M"),
        y: pluralize("y"),
        yy: pluralize("y"),
    },
    preparse: function (string) {
        return string
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap$1[match];
        })
            .replace(/،/g, ",");
    },
    postformat: function (string) {
        return string
            .replace(/\d/g, function (match) {
            return symbolMap$1[match];
        })
            .replace(/,/g, "،");
    },
    week: {
        dow: 6,
        doy: 12, // The week that contains Jan 12th is the first week of the year.
    },
});

/* eslint-disable complexity */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unsafe-return */
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
var symbolMap = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
};
var numberMap = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0",
};
// const pluralForm = function (n: number) {
//   switch (n) {
//     case 0:
//       return 0;
//     case 1:
//       return 1;
//     case 2:
//       return 2;
//     default:
//       if (n % 100 >= 3 && n % 100 <= 10) {
//         return 3;
//       }
//       if (n % 100 >= 11) {
//         return 4;
//       }
//       return 5;
//   }
// };
// const plurals = {
//   s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
//   m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
//   h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
//   d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
//   M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
//   y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"],
// } as any;
// const pluralize = function (u: string | number) {
//   return function (number: number, withoutSuffix: any) {
//     const f = pluralForm(number);
//     let str = plurals[u][pluralForm(number)];
//     if (f === 2) {
//       str = str[withoutSuffix ? 0 : 1];
//     }
//     return str.replace(/%d/i, number);
//   };
// };
moment.defineLocale("en-sa", {
    weekdays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    weekdaysParseExact: true,
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/\u200FM/\u200FYYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm",
    },
    meridiemParse: /[ص م]/,
    isPM: function (input) {
        return input === "م";
    },
    meridiem: function (hour) {
        if (hour < 12) {
            return "ص";
        }
        return "م";
    },
    calendar: {
        sameDay: "[اليوم عند الساعة] LT",
        nextDay: "[غدًا عند الساعة] LT",
        nextWeek: "dddd [عند الساعة] LT",
        lastDay: "[أمس عند الساعة] LT",
        lastWeek: "dddd [عند الساعة] LT",
        sameElse: "L",
    },
    // relativeTime: {
    //   future: "بعد %s",
    //   past: "منذ %s",
    //   s: pluralize("s"),
    //   ss: pluralize("s"),
    //   m: pluralize("m"),
    //   mm: pluralize("m"),
    //   h: pluralize("h"),
    //   hh: pluralize("h"),
    //   d: pluralize("d"),
    //   dd: pluralize("d"),
    //   M: pluralize("M"),
    //   MM: pluralize("M"),
    //   y: pluralize("y"),
    //   yy: pluralize("y"),
    // },
    preparse: function (string) {
        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) { return numberMap[match]; }).replace(/،/g, ",");
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) { return symbolMap[match]; }).replace(/,/g, "،");
    },
    week: {
        dow: 6,
        doy: 12, // The week that contains Jan 12th is the first week of the year.
    },
});

/* eslint-disable no-empty */
/* eslint-disable no-eval */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
function DatePicker(_a) {
    var ref = _a.ref, _b = _a.lang, lang = _b === void 0 ? "en" : _b, isError = _a.isError, disabled = _a.disabled, _c = _a.maxDate, maxDate = _c === void 0 ? new Date(2075, 11, 31) : _c, _d = _a.minDate, minDate = _d === void 0 ? new Date(1938, 0, 1) : _d, onChange = _a.onChange, value = _a.value;
    var _e = React.useState(false), locale = _e[0], setLocale = _e[1];
    var hijriHandler = function (e) {
        setLocale(e.currentTarget.checked);
    };
    // eslint-disable-next-line prefer-const
    React.useEffect(function () {
        if (lang) {
            console.log(lang);
            moment.locale("".concat(lang, "-sa"));
        }
    }, [lang]);
    return (React.createElement(React.Fragment, null,
        locale && (React.createElement(LocalizationProvider.LocalizationProvider, { dateAdapter: AdapterMomentHijri.AdapterMomentHijri },
            React.createElement(DatePicker$1.DatePicker, { inputRef: ref, onError: function (newError) { return console.log({ newError: newError }); }, format: "iDD/iMM/iYYYY", views: ["year", "month", "day"], value: momentHj(value) || null, onChange: function (date) {
                    if (onChange)
                        onChange(date);
                }, defaultValue: momentHj("2022-04-17"), minDate: momentHj(minDate), maxDate: momentHj(maxDate), slotProps: {
                    textField: {
                        variant: "outlined",
                        error: isError,
                        className: "w-full",
                    },
                } }))),
        !locale && (React.createElement(LocalizationProvider.LocalizationProvider, { dateAdapter: AdapterMoment.AdapterMoment },
            React.createElement("div", null,
                React.createElement(DatePicker$1.DatePicker, { onError: function (newError) { return console.log({ newError: newError }); }, inputRef: ref, format: "DD/MM/YYYY", views: ["year", "month", "day"], value: value || null, onChange: function (date) {
                        if (onChange)
                            onChange(date);
                    }, minDate: moment(minDate), maxDate: moment(maxDate), slotProps: {
                        textField: { variant: "outlined", error: isError, className: "w-full" },
                    } })))),
        !disabled && (React.createElement("div", { className: "mt-3 flex justify-between" },
            React.createElement("label", { className: "ml-3 flex items-center" },
                React.createElement("input", { type: "checkbox", className: "", onClick: hijriHandler }),
                React.createElement("span", { className: "mr-4 whitespace-nowrap" }, "switch to Hijri"))))));
}

exports.DatePicker = DatePicker;
//# sourceMappingURL=index.js.map
