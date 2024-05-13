import React from 'react'
import { AuthContext, AuthContextProps } from '../Stores/OicdAuth/AuthContext'

/**
 * @public
 */
export const useOIDCAuth = (): AuthContextProps => {
    const context = React.useContext(AuthContext)

    if (!context) {
        console.warn('AuthProvider context is undefined, please verify you are calling useAuth() as child of a <AuthProvider> component.')
    }

    return context as AuthContextProps
}
