import authStore from '../Stores/auth'

const useAuth = () => {
    const { /*isAuthenticated,*/ user } = authStore(state => state)
    // TODO: use : useAuth() hook to get auth state
    return { isAuthenticated: window.location.pathname.indexOf('dashboard') > 0, user }
}

export default useAuth
