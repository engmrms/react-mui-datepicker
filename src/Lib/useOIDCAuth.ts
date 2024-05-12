import { useEffect, useState } from 'react'
import AuthOIDCService, { IAuthService } from './AuthOIDCService'

export default function useOidcAuth() {
    const [user, setUser] = useState<IAuthService['user'] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    useEffect(() => {
        setIsLoading(true)
        AuthOIDCService.getUser()
            .then(user => {
                setIsLoading(false)
                setUser(user)
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

    return { user, isLoading, error, isAuthenticated: !user?.expired }
}
