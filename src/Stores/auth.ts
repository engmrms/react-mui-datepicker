import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import { UserTypes } from '../Models/enums'
import DevtoolsMiddlewares from './middleware'

const authStore = create<Local_DTO.AuthStore>()(
    DevtoolsMiddlewares(
        set => ({
            isAuthenticated: !!localStorage.getItem('nationalId') && !!localStorage.getItem('accessToken'),
            accessToken: localStorage.getItem('accessToken') || undefined,
            refreshToken: localStorage.getItem('refreshToken') || undefined,
            nationalId: localStorage.getItem('nationalId'),
            sessionExpired: false,
            user: {
                firstName: '',
                secondName: '',
                thridName: '',
                lastName: '',
                Id: '',
                roles: [],
                email: '',
                defaultRole: localStorage.getItem('defaultRole') as UserTypes,
            },
            login: nationalId =>
                set(() => {
                    localStorage.setItem('nationalId', nationalId)
                    return { isAuthenticated: true, nationalId, sessionExpired: false }
                }),
            setUser: (user: Partial<Local_DTO.User>) =>
                set(() => {
                    if (user.defaultRole) {
                        localStorage.setItem('defaultRole', user.defaultRole)
                    }
                    localStorage.setItem('displayName', `${user.firstName} ${user.lastName}`)
                    return { user }
                }),
            updateUser: (user: Partial<Local_DTO.User>) =>
                set(state => {
                    if (user.defaultRole) {
                        localStorage.setItem('defaultRole', user.defaultRole)
                    }
                    if (user.firstName && user.lastName) localStorage.setItem('displayName', `${user.firstName} ${user.lastName}`)
                    return { user: { ...state?.user, ...user } }
                }),
            logout: () =>
                set(state => {
                    localStorage.removeItem('nationalId')
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')
                    localStorage.removeItem('displayName')
                    localStorage.removeItem('defaultRole')
                    localStorage.removeItem('jwt')
                    localStorage.removeItem('ERAlertHidden')
                    localStorage.removeItem('registrationStartDate')
                    localStorage.removeItem('registrationEndDate')
                    state?.user?.roles?.map(role => {
                        localStorage.removeItem(`${role}-evaluationCounter`)
                    })
                    state?.user?.roles?.map(role => {
                        localStorage.removeItem(`${role}-evaluationSkipCounter`)
                    })

                    return {
                        isAuthenticated: false,
                        nationalId: undefined,
                        user: { roles: [] },
                        accessToken: undefined,
                        refreshToken: undefined,
                        sessionExpired: false,
                    }
                }),
            setExpireSession: () =>
                set(() => ({
                    sessionExpired: true,
                })),
            setDefaultRole: (defaultRole?: UserTypes) =>
                set(state => {
                    if (defaultRole && state?.user) {
                        localStorage.setItem('defaultRole', defaultRole)
                        state.user.defaultRole = defaultRole
                    }
                }),
        }),
        { name: 'auth' },
    ),
)

export default authStore
