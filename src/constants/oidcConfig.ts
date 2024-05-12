export const IDENTITY_CONFIG = {
    authority: import.meta.env.VITE_REACT_APP_AUTH_URL, //(string): The URL of the OIDC provider.
    client_id: import.meta.env.VITE_REACT_APP_IDENTITY_CLIENT_ID, //(string): Your client application's identifier as registered with the OIDC provider.
    client_secret: import.meta.env.VITE_REACT_APP_IDENTITY_CLIENT_SECRET, //(string): Your client application's identifier as registered with the OIDC provider.
    redirect_uri: import.meta.env.VITE_REACT_APP_REDIRECT_URL, //The URI of your client application to receive a response from the OIDC provider.
    login: import.meta.env.VITE_REACT_APP_AUTH_URL,
    automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
    loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
    silent_redirect_uri: import.meta.env.VITE_REACT_APP_SILENT_REDIRECT_URL, //(string): The URL for the page containing the code handling the silent renew.
    post_logout_redirect_uri: import.meta.env.VITE_REACT_APP_LOGOFF_REDIRECT_URL, // (string): The OIDC post-logout redirect URI.
    audience: 'https://example.com', //is there a way to specific the audience when making the jwt
    responseType: 'id_token token', //(string, default: 'id_token'): The type of response desired from the OIDC provider.
    grantType: 'password',
    scope: 'openid NationalID', //(string, default: 'openid'): The scope being requested from the OIDC provider.
    webAuthResponseType: 'id_token token',
}

export const METADATA_OIDC = {
    issuer: 'https://iam-stg.moe.gov.sa',
    jwks_uri: import.meta.env.VITE_REACT_APP_AUTH_URL + '/jwks/UP_Definition',
    authorization_endpoint: import.meta.env.VITE_REACT_APP_AUTH_URL + '/authorize',
    token_endpoint: import.meta.env.VITE_REACT_APP_AUTH_URL + '/token',
    userinfo_endpoint: import.meta.env.VITE_REACT_APP_AUTH_URL + '/userinfo',
    end_session_endpoint: import.meta.env.VITE_REACT_APP_AUTH_URL + '/endsession',
    check_session_iframe: import.meta.env.VITE_REACT_APP_AUTH_URL + '/checksession',
    revocation_endpoint: import.meta.env.VITE_REACT_APP_AUTH_URL + '/revoke',
    introspection_endpoint: import.meta.env.VITE_REACT_APP_AUTH_URL + '/introspect',
}
