import authStore from '../Stores/auth'

export const useAuth = () => {
    const { isAuthenticated, user, nationalId } = authStore(state => state)

    return { isAuthenticated, user, nationalId }
}

export default useAuth
