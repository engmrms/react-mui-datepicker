import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import DevtoolsMiddlewares from '../Stores/middleware'

const useLanguage = create<Local_DTO.useLanguageStore>()(
    DevtoolsMiddlewares(
        set => ({
            lang: localStorage.getItem('up_lang') ?? 'ar',
            dir: localStorage.getItem('up_lang') === 'en' ? 'ltr' : 'rtl',
            changeLang: value =>
                set(state => {
                    if (value === state.lang) return
                    localStorage.setItem('up_lang', value)
                    window.location.reload()
                }),
        }),
        { name: 'lanugage' },
    ),
)

export default useLanguage
