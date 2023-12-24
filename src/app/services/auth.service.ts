import { coerceStringArray } from '@angular/cdk/coercion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://dev-qisf2qefkmr03x36.us.auth0.com/',
  redirectUri: window.location.origin,
  clientId: 't5jje6A3hhtdCZ12hzd2ouyer8FWIgCT',
  responseType: 'code',
  scope: 'openid profile admin',
  showDebugInformation: true,
  silentRefreshRedirectUri: window.location.origin,
  useSilentRefresh: true,
  customQueryParams: {
    audience: 'http://localhost:8443',
  },
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  token_url = environment.token_url;

  constructor(private oauth: OAuthService, private httpClient: HttpClient) {
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin();
    this.oauth.setupAutomaticSilentRefresh();
  }

  public getToken(code: string, codeVerifier: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('grant_type', environment.grant_type);
    body.set('client_id', environment.client_id);
    body.set('redirect_uri', environment.redirect_uri);
    body.set('scope', environment.scope);
    body.set('code_verifier', codeVerifier);
    body.set('code', code);
    const basic_auth = 'Basic ' + btoa('client:secret1');
    const headerObject = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept':'*/*',
      'Authorization': basic_auth
    });
    const httpOptions = {headers: headerObject}
    return this.httpClient.post<any>(this.token_url, body, httpOptions);
  }
  

  login(): void {
    this.oauth.initLoginFlow();
  }
  public logout() { this.oauth.logOut(); }
  public refresh() { this.oauth.silentRefresh(); }
  public hasValidToken() { return this.oauth.hasValidAccessToken(); }

  // These normally won't be exposed from a service like this, but
  // for debugging it makes sense.
  public get accessToken() { return this.oauth.getAccessToken(); }
  public get refreshToken() { return this.oauth.getRefreshToken(); }
  public get identityClaims() { return this.oauth.getIdentityClaims(); }
  public get idToken() { return this.oauth.getIdToken(); }
  public get logoutUrl() { return this.oauth.logoutUrl; }


}