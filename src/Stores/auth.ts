import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import { UserTypes } from '../Models/enums'
import DevtoolsMiddlewares from './middleware'

const getUserFromLocalStorge = () => (localStorage.getItem('nationalId') ? JSON.parse(localStorage.getItem('nationalId')!) : '')

const authStore = create<Local_DTO.AuthStore>()(
    DevtoolsMiddlewares(
        set => ({
            isAuthenticated: !!localStorage.getItem('nationalId'),
            accessToken: undefined,
            refreshToken: undefined,
            nationalId: getUserFromLocalStorge(),
            user: { roles: [] },
            login: nationalId =>
                set(() => {
                    localStorage.setItem('nationalId', JSON.stringify(nationalId))
                    return { isAuthenticated: true }
                }),
            setUser: (user: Partial<Local_DTO.User>) =>
                set(() => {
                    return { user }
                }),
            logout: () =>
                set(() => {
                    window.location.replace('/')
                    localStorage.removeItem('user')
                    localStorage.removeItem('accessToken')
                    return { isAuthenticated: false }
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
