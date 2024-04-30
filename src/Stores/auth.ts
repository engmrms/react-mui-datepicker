import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import { UserTypes } from '../Models/enums'
import DevtoolsMiddlewares from './middleware'
interface Login {
    Name?: string
    ProfilePicture?: string
    Id?: string
    Email?: string
    roles?: number[]
    defaultRole?: number
}

const getUserFromLocalStorge = () =>
    localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')!)
        : { Name: '', ProfilePicture: '', Id: '', Email: '', roles: [], defaultRole: 0 }

const authStore = create<Local_DTO.AuthStore>()(
    DevtoolsMiddlewares(
        set => ({
            isAuthenticated: !!localStorage.getItem('user'),
            accessToken: undefined,
            refreshToken: undefined,
            user: getUserFromLocalStorge(),
            login: ({ Name, ProfilePicture, Id, Email, roles, defaultRole }: Login) =>
                set(() => {
                    localStorage.setItem('user', JSON.stringify({ Name, ProfilePicture, Id, Email, roles, defaultRole }))
                    return { isAuthenticated: true, user: { Name, ProfilePicture, Id, Email, roles, defaultRole } }
                }),
            logout: () =>
                set(() => {
                    window.location.replace('/')
                    localStorage.removeItem('user')
                    return { isAuthenticated: true }
                }),
            resetUser: (defaultRole?: UserTypes) =>
                set(() => {
                    const user = getUserFromLocalStorge()

                    if (defaultRole) user.defaultRole = defaultRole

                    localStorage.setItem('user', JSON.stringify(user))
                    return { isAuthenticated: true, user: user }
                }),
        }),
        { name: 'auth' },
    ),
)

export default authStore
