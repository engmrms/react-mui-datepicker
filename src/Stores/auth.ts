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
            user: { firstName: '', secondName: '', thridName: '', lastName: '', Id: '', roles: [], email: '' },
            login: nationalId =>
                set(() => {
                    localStorage.setItem('nationalId', nationalId)
                    return { isAuthenticated: true, nationalId }
                }),
            setUser: (user: Partial<Local_DTO.User>) =>
                set(() => {
                    localStorage.setItem('displayName', `${user.firstName} ${user.lastName}`)
                    return { user }
                }),
            updateUser: (user: Partial<Local_DTO.User>) =>
                set((state) => {
                    if(user.firstName&&user.lastName)localStorage.setItem('displayName', `${user.firstName} ${user.lastName}`)
                    return { user:{...state?.user, ...user} }
                }),
            logout: () =>
                set(() => {
                    window.location.replace('/')
                    localStorage.removeItem('nationalId')
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('displayName')
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
