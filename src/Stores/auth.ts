import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import { UserTypes } from '../Models/enums'
import DevtoolsMiddlewares from './middleware'

const authStore = create<Local_DTO.AuthStore>()(
    DevtoolsMiddlewares(
        set => ({
            isAuthenticated: !!localStorage.getItem('nationalId'),
            accessToken: undefined,
            refreshToken: undefined,
            nationalId: localStorage.getItem('nationalId'),
            user: { roles: [] },
            login: nationalId =>
                set(() => {
                    localStorage.setItem('nationalId', JSON.stringify(nationalId))
                    return { isAuthenticated: true, nationalId }
                }),
            setUser: (user: Partial<Local_DTO.User>) =>
                set(() => {
                    return { user }
                }),
            logout: () =>
                set(() => {
                    window.location.replace('/')
                    localStorage.removeItem('nationalId')
                    localStorage.removeItem('accessToken')
                    return { isAuthenticated: false, nationalId: undefined, user: { roles: [] }, accessToken: undefined, refreshToken: undefined }
                }),
            setDefaultRole: (defaultRole?: UserTypes) =>
                set(state => {
                    if (defaultRole && state?.user) state.user.defaultRole = defaultRole
                }),
        }),
        { name: 'auth' },
    ),
)

export default authStore
