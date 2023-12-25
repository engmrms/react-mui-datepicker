import LocalizedStrings from 'react-localization'

import { ar } from './ar'
import { en } from './en'

export const strings = new LocalizedStrings({
    ar,
    en,
})

export const setLanguage = (lang: string) => strings.setLanguage(lang)

export default LocalizedStrings
