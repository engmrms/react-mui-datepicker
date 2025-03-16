import type { User } from 'oidc-client-ts'
import { Log, UserManager } from 'oidc-client-ts'
import { createIdentityConfig, createMetadataConfig, OIDCConfig } from '../constants/oidcConfig'

/**
 * @public
 */
export interface IAuthService {
    /**
     * See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.
     */
    user?: User | null

    /**
     * True when the library has been initialized and no navigator request is in progress.
     */
    isLoading: boolean

    /**
     * True while the user has a valid access token.
     */
    isAuthenticated: boolean

    /**
     * Was there a signin or silent renew error?
     */
    error?: Error
    hasAuthParams(): boolean
    getUser(): Promise<User | null>
    signin(): Promise<void>
    completeSignIn(): Promise<void | User>
    signout(): Promise<void>
    clearSession(): Promise<void>
}

class AuthService implements IAuthService {
    private static instance: AuthService | null = null
    private userManager: UserManager
    private config: OIDCConfig
    public user?: User | null
    public isLoading: boolean
    public isAuthenticated: boolean
    public error?: Error

    private constructor(config: OIDCConfig) {
        this.config = config
        this.userManager = new UserManager({
            ...createIdentityConfig(config),
            metadata: createMetadataConfig(config.authUrl, config?.jwks ?? 'UP_Definition'),
        })
        this.isAuthenticated = false
        this.isLoading = false
        this.user = null
        this.error = undefined

        Log.setLogger(console)
        Log.setLevel(Log.DEBUG)

        this.setupEventListeners()
    }

    public static getInstance(config: OIDCConfig): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService(config)
        }
        return AuthService.instance
    }

    private setupEventListeners() {
        this.userManager.events.addUserLoaded((user: User) => {
            this.user = user
            this.isAuthenticated = !user?.expired
            this.error = undefined
            this.isLoading = false
        })

        this.userManager.events.addUserUnloaded(() => {
            this.isAuthenticated = false
            this.isLoading = false
            this.user = null
            this.error = undefined
        })

        this.userManager.events.addSilentRenewError((e: Error) => {
            console.error('Silent renew error:', e.message)
            this.error = e
            this.user = null
            this.isAuthenticated = false
            this.isLoading = false
        })

        this.userManager.events.addAccessTokenExpired(() => {
            console.log('Access token expired.')
            this.signin()
        })

        this.userManager.events.addUserSignedIn(() => {
            this.isLoading = false
            this.error = undefined
        })
    }

    public hasAuthParams(location = window.location): boolean {
        let searchParams = new URLSearchParams(location.search)
        if ((searchParams.get('code') || searchParams.get('error')) && searchParams.get('state')) {
            return true
        }

        searchParams = new URLSearchParams(location.hash.replace('#', '?'))
        if ((searchParams.get('code') || searchParams.get('error')) && searchParams.get('state')) {
            return true
        }

        return false
    }

    public signin(): Promise<void> {
        this.isLoading = true
        this.error = undefined
        this.user = null
        return this.userManager.signinRedirect()
    }

    public completeSignIn() {
        return this.userManager
            .signinRedirectCallback()
            .then(async (user: void | User) => {
                this.isLoading = false
                if (user) {
                    this.user = user
                    this.isAuthenticated = !user?.expired
                } else {
                    this.user = await this.userManager.getUser()
                }

                return user
            })
            .catch(e => {
                this.isLoading = false
                console.log('completeSignIn:', e)
                this.error = e
                throw Error(e)
                // window.location.replace('/login')
            })
    }

    public getUser(): Promise<User | null> {
        this.isLoading = true
        return this.userManager
            .getUser()
            .then(user => {
                if (user) {
                    this.user = user
                    this.isAuthenticated = !user?.expired
                    this.isLoading = false
                }
                return user
            })
            .catch(error => {
                this.error = error
                this.isLoading = false
                throw error
            })
    }

    /**
     * function to call another url to kill opend session with 'sso service'
     */
    public async clearSession(): Promise<void> {
        return new Promise((resolve, reject) => {
            const logoutWindow = window.open('https://iam-dev.moe.gov.sa/pkmslogout', '_blank', 'width=800,height=600,noopener')
            if (logoutWindow) {
                setTimeout(() => {
                    logoutWindow.close()
                    resolve()
                }, 1000)
            } else {
                console.error('Failed to open logout window')
                reject(new Error('Unable to open new popup window'))
            }
        })
    }

    public signout = async (redirectUrl: string = '') => {
        this.isLoading = false
        window.location.href = `${this.config?.oauth20LogoutUrl}${redirectUrl}`

        // return this.userManager
        //     .getUser()
        //     .then(async user => {
        //         if (user?.access_token) {
        //             const metadata = this.userManager.settings.metadata
        //             const config = this.config

        //             await fetch(
        //                 `${metadata?.end_session_endpoint}?client_id=${config.clientId}&client_secret=${config.clientSecret}&token=${user.access_token}`,
        //                 { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
        //             )

        //             if (config.oauth20LogoutUrl) {
        //                 await fetch(config.oauth20LogoutUrl, { method: 'POST' })
        //             }
        //         }
        //         return user
        //     })
        //     .then(async () => {
        //         await this.userManager.removeUser()
        //         await this.userManager.clearStaleState()
        //     })
    }
}

export { AuthService }
