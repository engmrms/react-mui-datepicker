import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const langRegex = {
    enRegex: /^[a-zA-Z- ]+$/,
    arRegex: /^[\u0621-\u064A- ]+$/,
    bothArAndEnRegexonlyLetters: /^[a-zA-Z-\u0621-\u064A ]+$/,
    enletterAndNumbersRegex: /^[a-zA-Z0-9]*$/,
    mobileNumber: /^(009665)(\d){8}$/,
    TelPhone: /^(0096611)(\d){7}$/,
    nationalId: /^1(\d){9}$/,
    nationalOrResidentId: /^[12](\d){9}$/,
    nonSaudianNationalId: /^2(\d){9}$/,
    tags: /<[^>]*>?/gm,
    specialCharcter: /[!@#$%^&*()_+\-'~<>/\\?|÷×]/,
}
