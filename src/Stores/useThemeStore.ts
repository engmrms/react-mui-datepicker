import { create } from 'zustand'
import { THEME } from '../Models/enums'
import DevtoolsMiddlewares from './middleware'

interface ThemeStore {
    theme: THEME | string
    setTheme: (newTheme: THEME) => void
}

const applySystemTheme = () => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDarkMode) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
}

const useThemeStore = create<ThemeStore>()(
    DevtoolsMiddlewares(
        set => ({
            theme: THEME.SYSTEM,
            setTheme: (newTheme: THEME) => {
                localStorage.setItem('defaultTheme', String(newTheme))

                switch (+newTheme) {
                    case THEME.LIGHT:
                        document.body.classList.remove('dark')
                        break
                    case THEME.DARK:
                        document.body.classList.add('dark')
                        break
                    case THEME.SYSTEM:
                        applySystemTheme()
                        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme)
                        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', applySystemTheme)
                        break
                    default:
                        break
                }
                return set({ theme: newTheme })
            },
        }),
        { name: 'theme' },
    ),
)

export { useThemeStore }
