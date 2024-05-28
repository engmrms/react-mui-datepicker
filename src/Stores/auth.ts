import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import { UserTypes } from '../Models/enums'
import DevtoolsMiddlewares from './middleware'

const authStore = create<Local_DTO.AuthStore>()(
    DevtoolsMiddlewares(
        set => ({
            isAuthenticated: !!localStorage.getItem('up_nationalId'),
            accessToken: undefined,
            refreshToken: undefined,
            nationalId: localStorage.getItem('up_nationalId'),
            user: {
                firstName: '',
                secondName: '',
                thridName: '',
                lastName: '',
                Id: '',
                roles: [],
                email: '',
                defaultRole: localStorage.getItem('up_defaultRole') as UserTypes,
            },
            login: nationalId =>
                set(() => {
                    localStorage.setItem('up_nationalId', nationalId)
                    return { isAuthenticated: true, nationalId }
                }),
            setUser: (user: Partial<Local_DTO.User>) =>
                set(() => {
                    if (user.defaultRole) {
                        localStorage.setItem('up_defaultRole', user.defaultRole)
                    }
                    localStorage.setItem('up_displayName', `${user.firstName} ${user.lastName}`)
                    return { user }
                }),
            updateUser: (user: Partial<Local_DTO.User>) =>
                set(state => {
                    if (user.defaultRole) {
                        localStorage.setItem('up_defaultRole', user.defaultRole)
                    }
                    if (user.firstName && user.lastName) localStorage.setItem('up_displayName', `${user.firstName} ${user.lastName}`)
                    return { user: { ...state?.user, ...user } }
                }),
            logout: () =>
                set(() => {
                    window.location.replace('/')
                    localStorage.removeItem('up_nationalId')
                    localStorage.removeItem('up_accessToken')
                    localStorage.removeItem('up_displayName')
                    localStorage.removeItem('up_defaultRole')
                    return { isAuthenticated: false, nationalId: undefined, user: { roles: [] }, accessToken: undefined, refreshToken: undefined }
                }),
            setDefaultRole: (defaultRole?: UserTypes) =>
                set(state => {
                    if (defaultRole && state?.user) {
                        localStorage.setItem('up_defaultRole', defaultRole)
                        state.user.defaultRole = defaultRole
                    }
                }),
        }),
        { name: 'auth' },
    ),
)

export default authStore
