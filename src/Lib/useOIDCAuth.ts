import { useEffect, useState } from 'react'
import AuthOIDCService, { IAuthService } from './AuthOIDCService'

export default function useOidcAuth() {
    const [user, setUser] = useState<IAuthService['user'] | null>(null)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
        AuthOIDCService.getUser()
            .then(val => {
                setIsLoading(false)
                setUser(val)
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
                setUser(null)
            })
        return () => {
            setError(undefined)
            setIsLoading(false)
            setUser(null)
        }
    }, [])

    return { user: user, isLoading, error, isAuthenticated: user && !user?.expired }
}
