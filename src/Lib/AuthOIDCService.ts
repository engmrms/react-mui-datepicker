import { IDENTITY_CONFIG, METADATA_OIDC } from '../constants/oidcConfig'
import { UserManager, Log } from 'oidc-client-ts'
import axios from 'axios'
import type { User } from 'oidc-client-ts'

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
    signout(): void
    clearSession(): void
}

class AuthService implements IAuthService {
    private static instance: AuthService | null = null
    private userManager: UserManager
    public user?: User | null
    public isLoading: boolean
    public isAuthenticated: boolean
    public error?: Error

    private constructor() {
        this.userManager = new UserManager({
            ...IDENTITY_CONFIG,
            metadata: { ...METADATA_OIDC },
        })
        this.isAuthenticated = false
        this.isLoading = false
        this.user = null
        this.error = undefined

        Log.setLogger(console)
        Log.setLevel(Log.DEBUG)

        this.setupEventListeners()
    }

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService()
        }
        return AuthService.instance
    }

    private setupEventListeners() {
        this.userManager.events.addUserLoaded((user: User) => {
            console.log('loaded => ', user)

            this.user = user
            this.isAuthenticated = !!user?.expired
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
            this.userManager
                .signinSilent()
                .then(() => {
                    this.completeSignIn()
                })
                .catch(e => {
                    console.error('Silent renew error:', e.message)
                    this.signout()
                })
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

    public completeSignIn = () => {
        return this.userManager
            .signinRedirectCallback()
            .then(async (user: void | User) => {
                console.log('completeSignIn: ', user)

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
     * function to call another url to kill opend session to allow set credentials again
     */
    public clearSession = () => {
        // Open the logout URL in a new tab
        const logoutWindow = window.open('https://iam-stg.moe.gov.sa/pkmslogout', '_blank', 'width=800,height=600')
        // Check if the window was successfully opened
        if (logoutWindow) {
            // Close the new tab after a short delay
            setTimeout(() => {
                logoutWindow.close()
            }, 1000)
        } else {
            console.error('Failed to open logout window')
        }
    }

    public signout = () => {
        this.userManager
            .getUser()
            .then(user => {
                // this.clearSession()
                axios
                    .post(
                        `${METADATA_OIDC.end_session_endpoint}?client_id=${IDENTITY_CONFIG.client_id}&client_secret=${IDENTITY_CONFIG.client_secret}&token=${user?.access_token}`,
                        {},
                        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
                    )
                    .catch(e => {
                        console.log('err', e)
                    })
                axios.post('https://iam-stg.moe.gov.sa/up/sps/oauth/oauth20/logout').catch(e => {
                    console.log('err', e)
                })
                return user
            })
            .then(() => {
                this.userManager.removeUser()
                this.userManager.clearStaleState()
            })
    }
}

const authService = AuthService.getInstance()
export default authService
