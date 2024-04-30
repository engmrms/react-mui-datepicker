import authStore from '../Stores/auth'

const useAuth = () => {
    const { isAuthenticated, user } = authStore(state => state)

    return { isAuthenticated, user }
}

export default useAuth
