/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx'
import moment from 'moment'
import momentHijri from 'moment-hijri'
import { extendTailwindMerge } from 'tailwind-merge'
import { DateFormat } from '../Models/enums'
import useLanguage from '../Stores/useLanguage'
import './ar-sa'

export const twMerge = extendTailwindMerge({
    classGroups: {
        'font-size': ['text-caption-01', 'text-subtitle-01', 'text-subtitle-02', 'text-body-01', 'text-body-02'],
    },
})

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const langRegex = {
    enRegex: /^[a-zA-Z- ]+$/,
    arRegex: /^[\u0621-\u064A- ]+$/,
    bothArAndEnRegexonlyLetters: /^[a-zA-Z-\u0621-\u064A ]+$/,
    bothArAndEnRegexonlyLettersAndNumbers: /^[a-zA-Z0-9-\u0621-\u064A ]+$/,
    enletterAndNumbersRegex: /^[a-zA-Z0-9]*$/,
    mobileNumber: /^(5)(\d){8}$/,
    TelPhone: /^(0096611)(\d){7}$/,
    nationalId: /^1(\d){9}$/,
    nationalOrResidentId: /^[12](\d){9}$/,
    nonSaudianNationalId: /^2(\d){9}$/,
    tags: /<[^>]*>?/gm,
    specialCharcter: /[!@#$%^&*()_+\-'~<>/\\?|÷×]/,
    arSymbolsRegex: /[\u0600-\u06FF]/,
}

export const handleArabicNumbers = (e: React.ChangeEvent<HTMLInputElement>, watch: any) => {
    const reg = /^[0-9\u0660-\u0669]+$/
    if (!reg.test(e.target.value) && e.target.value !== '') {
        e.target.value = watch
    }

    e.target.value = e.target.value
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => {
            return String(d.charCodeAt(0) - 1632)
        })
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => {
            return String(d.charCodeAt(0) - 1776)
        })
    return e
}

export const formatter = (dir: string) => {
    return new Intl.DateTimeFormat(dir === 'rtl' ? 'ar' : 'en', { day: '2-digit', month: 'short', year: 'numeric' })
}
export const formatterTime = (dir: string) => {
    return new Intl.DateTimeFormat(dir === 'ar' ? 'ar' : 'en', { timeStyle: 'short' })
}

export const tw = (...classes: string[]) =>
    classes
        .map(cls =>
            cls
                .split(' ')
                .map(className => (process.env.NODE_ENV === 'production' ? `er-${className}` : className))
                .join(' '),
        )
        .join(' ')

export const useSwitchData = () => {
    const { lang } = useLanguage(state => state)
    return (arValue: string = '', enValue: string = '') => {
        return String(lang).toLocaleLowerCase() === 'ar' ? arValue : (enValue ?? arValue)
    }
}

export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
    let timeout: ReturnType<typeof setTimeout> | null = null

    return function (this: any, ...args: Parameters<T>) {
        const later = () => {
            timeout = null
            func.apply(this, args)
        }

        if (timeout !== null) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(later, wait)
    } as T
}

export const dateFormatter = ({
    date,
    format,
    isHijri = false,
    hasHijriFormat,
}: {
    date: string | Date | undefined
    format: 'short' | 'mid' | 'long'
    isHijri?: boolean
    hasHijriFormat?: boolean
}) => {
    const isArabic = document.dir === 'rtl'
    moment.updateLocale(isArabic ? 'ar-sa' : 'en', {})
    switch (format) {
        case 'short':
            return moment(date).format(isArabic ? DateFormat.ArShort : DateFormat.EnShort)
        case 'mid':
            return moment(date).format('dddd')
        case 'long':
            if (isHijri) return momentHijri(date, hasHijriFormat ? 'iDD/iMM/iYYYY' : undefined).format(isArabic ? 'iYYYY/iM/iD' : 'iD/iM/iYYYY')
            return moment(new Date(date ?? ''), 'DD-MM-YYYY').format(isArabic ? 'YYYY/M/D' : 'D/M/YYYY')
    }
}
