export interface OIDCConfig {
    clientId: string
    clientSecret: string
    baseUrl: string
    authUrl: string
    oauth20LogoutUrl: string // Required (no ?)
}

export const createIdentityConfig = (config: OIDCConfig) => ({
    authority: config.authUrl,
    client_id: config.clientId,
    client_secret: config.clientSecret,
    redirect_uri: `${config.baseUrl}/login/sso/callback`,
    login: config.authUrl,
    automaticSilentRenew: true,
    loadUserInfo: false,
    silent_redirect_uri: `${config.baseUrl}/login/sso/callback`,
    post_logout_redirect_uri: `${config.baseUrl}/logout/sso`,
    audience: config.baseUrl,
    responseType: 'id_token token',
    grantType: 'password',
    scope: 'openid NationalID',
    webAuthResponseType: 'id_token token',
})

export const createMetadataConfig = (authUrl: string) => ({
    issuer: 'https://iam-dev.moe.gov.sa',
    jwks_uri: `${authUrl}/jwks/UP_Definition`,
    authorization_endpoint: `${authUrl}/authorize`,
    token_endpoint: `${authUrl}/token`,
    userinfo_endpoint: `${authUrl}/userinfo`,
    end_session_endpoint: `${authUrl}/revoke`,
    check_session_iframe: `${authUrl}/checksession`,
    revocation_endpoint: `${authUrl}/revoke`,
    introspection_endpoint: `${authUrl}/introspect`,
})
