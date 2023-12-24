export const environment = {
    apiBaseUrl: 'http://localhost:8443/sb-users-services/api/v1',
    apiBaseUrl_1: 'http://localhost:8443/sb-users-identify',
    auth:{
        domain: 'dev-1vdgikx2zotskywk.us.auth0.com',
        clientId: 'bpLG9gaipbZyS5TuFnc4H5eK4YPhgzy3',
        authorizationParams: {
        redirect_uri: window.location.origin
      }
    },
    authorize_uri: 'http://localhost:9000/oauth2/authorize?',
    client_id:"client",
    redirect_uri: "http://localhost:4200/authorized",
    scope: "openid",
    response_type: "code",
    response_mode: "fragment",
    code_challenge_method: "S256",
    token_url: "http://localhost:9000/oauth2/token",
    grant_type: 'authorization_code',
    resource_url: "http://localhost:8080/resource/",
    logout_url: "http://localhost:9000/logout",
    secret_pkce: 'secret'
};
