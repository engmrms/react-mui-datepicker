import { PropsWithChildren, useEffect, useLayoutEffect } from 'react'
import { setLanguage } from '../Locales'
import { useLanguage } from '../package'

interface BootstrapProps extends PropsWithChildren {
    onLanguageChange?: () => void
    onDirChange?: () => void
}

const Bootstrap = ({ children, onLanguageChange, onDirChange }: BootstrapProps) => {
    const { lang, dir } = useLanguage()
    useLayoutEffect(() => {
        document.dir = dir
        if (navigator.userAgent.indexOf('iPhone') > -1) {
            document?.querySelector('[name=viewport]')?.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1')
        }
        onDirChange?.()
    }, [dir, onDirChange])

    useEffect(() => {
        if (!lang) return
        setLanguage(lang)
        onLanguageChange?.()
    }, [lang, onLanguageChange])

    return children
}

export { Bootstrap }
