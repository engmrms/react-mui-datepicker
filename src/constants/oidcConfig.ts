export interface OIDCConfig {
    clientId: string
    clientSecret: string
    baseUrl: string
    authUrl: string
    jwks?: string
    disablePKCE?: boolean
    oauth20LogoutUrl: string // Required (no ?)
}

export const createIdentityConfig = (config: OIDCConfig) => ({
    authority: config.authUrl,
    client_id: config.clientId,
    client_secret: config.clientSecret,
    redirect_uri: `${config.baseUrl}/login/sso/callback`,
    login: config.authUrl,
    automaticSilentRenew: false,
    loadUserInfo: false,
    silent_redirect_uri: `${config.baseUrl}/login/sso/callback`,
    post_logout_redirect_uri: `${config.baseUrl}/logout/sso`,
    audience: config.baseUrl,
    responseType: 'code',
    grantType: 'authorization_code',
    scope: 'openid NationalID offline_access',
    webAuthResponseType: 'code',
    disablePKCE: config.disablePKCE || true,
})

export const createMetadataConfig = (authUrl: string, jwks: string) => ({
    issuer: 'https://iam-dev.moe.gov.sa',
    jwks_uri: `${authUrl}/jwks/${jwks}`,
    authorization_endpoint: `${authUrl}/authorize`,
    token_endpoint: `${authUrl}/token`,
    userinfo_endpoint: `${authUrl}/userinfo`,
    end_session_endpoint: `${authUrl}/revoke`,
    check_session_iframe: `${authUrl}/checksession`,
    revocation_endpoint: `${authUrl}/revoke`,
    introspection_endpoint: `${authUrl}/introspect`,
})
