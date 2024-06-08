import { useEffect, useState } from 'react'
import AuthOIDCService, { IAuthService } from './AuthOIDCService'

export default function useOidcAuth() {
    const [user, setUser] = useState<IAuthService['user'] | null>(AuthOIDCService.user)
    const [isLoading, setIsLoading] = useState<boolean>(AuthOIDCService.isLoading)
    const [error, setError] = useState<Error | undefined>(AuthOIDCService.error)

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true)
            try {
                const user = await AuthOIDCService.getUser()
                setUser(user)
                setError(AuthOIDCService.error)
            } catch (err) {
                setError(err as Error)
                setUser(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUser()
    }, [])

    return {
        user,
        isLoading,
        error,
        isAuthenticated: !!user && !user?.expired,
    }
}
