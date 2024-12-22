const APP_AUTH_URL = import.meta.env.VITE_APP_AUTH_URL
const APP_BASE_URL = process.env.NODE_ENV === 'production' ? import.meta.env.VITE_APP_BASE_URL : 'https://localhost:5000'

export const IDENTITY_CONFIG = {
    authority: APP_AUTH_URL, //(string): The URL of the OIDC provider.
    client_id: import.meta.env.VITE_OIDC_CLIENT_ID, //(string): Your client application's identifier as registered with the OIDC provider.
    client_secret: import.meta.env.VITE_OIDC_CLIENT_SECRET, //(string): Your client application's identifier as registered with the OIDC provider.
    redirect_uri: `${APP_BASE_URL}/login/sso/callback`, //The URI of your client application to receive a response from the OIDC provider.
    login: APP_AUTH_URL,
    automaticSilentRenew: true, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
    loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
    silent_redirect_uri: `${APP_BASE_URL}/login/sso/callback`, //(string): The URL for the page containing the code handling the silent renew.
    post_logout_redirect_uri: `${APP_BASE_URL}/logout/sso`, // (string): The OIDC post-logout redirect URI.
    audience: APP_BASE_URL, //is there a way to specific the audience when making the jwt
    responseType: 'id_token token', //(string, default: 'id_token'): The type of response desired from the OIDC provider.
    grantType: 'password',
    scope: 'openid NationalID', //(string, default: 'openid'): The scope being requested from the OIDC provider.
    webAuthResponseType: 'id_token token',
}

export const METADATA_OIDC = {
    issuer: 'https://iam-dev.moe.gov.sa',
    jwks_uri: APP_AUTH_URL + '/jwks/UP_Definition',
    authorization_endpoint: APP_AUTH_URL + '/authorize',
    token_endpoint: APP_AUTH_URL + '/token',
    userinfo_endpoint: APP_AUTH_URL + '/userinfo',
    end_session_endpoint: APP_AUTH_URL + '/revoke',
    check_session_iframe: APP_AUTH_URL + '/checksession',
    revocation_endpoint: APP_AUTH_URL + '/revoke',
    introspection_endpoint: APP_AUTH_URL + '/introspect',
}
