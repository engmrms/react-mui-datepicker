import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import DevtoolsMiddlewares from '../Stores/middleware'

const useLanguage = create<Local_DTO.useLanguageStore>()(
    DevtoolsMiddlewares(
        set => ({
            lang: localStorage.getItem('lang') ?? 'ar',
            dir: localStorage.getItem('lang') === 'en' ? 'ltr' : 'rtl',
            changeLang: value =>
                set(state => {
                    if (value === state.lang) return
                    localStorage.setItem('lang', value)
                    window.location.reload()
                }),
        }),
        { name: 'lanugage' },
    ),
)

export default useLanguage
