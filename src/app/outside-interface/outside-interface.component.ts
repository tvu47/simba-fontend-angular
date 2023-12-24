import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import * as CryptoJS from 'crypto-js';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

@Component({
  selector: 'app-outside-interface',
  templateUrl: './outside-interface.component.html',
  styleUrls: ['./outside-interface.component.scss']
})
export class OutsideInterfaceComponent {

  public!: Observable<Message>;
  private!: Observable<Message>;
  privateScoped!: Observable<Message>;
  isLogged:boolean;
  isAdmin:boolean;

  authorize_uri = environment.authorize_uri;
  logoutUrl = environment.logout_url;
  param: any = {
    client_id:environment.client_id,
    redirect_uri: environment.redirect_uri,
    scope: environment.scope,
    response_type: environment.response_type,
    response_mode: environment.response_mode,
    code_challenge_method: environment.code_challenge_method,
  }
  constructor(public auth: AuthService, 
    @Inject(DOCUMENT) public document: Document, 
    private http: HttpClient, 
    private router: Router, 
    private tokenService: TokenService) {

    }

  ngOnInit(): void {
    this.getLogged();
  }

  login(){
    // this.auth.login();
    const code_verifier = this.generateCodeVerifier();
    this.tokenService.setVerifier(code_verifier);
    this.param.code_challenge = this.generateCodeChallenge(code_verifier);
    const httpParams = new HttpParams({fromObject: this.param});
    const codeUrl = this.authorize_uri + httpParams.toString();
    location.href = codeUrl;

  }
  onLogout(){
    this.tokenService.clear();
    location.href = this.logoutUrl;
  }
  getLogged(){
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  generateCodeVerifier(): string{
    let result = '';
    const char_length = CHARACTERS.length;
    for(let i = 0; i< 44; i++){
      result += CHARACTERS.charAt(Math.floor(Math.random() * char_length))
    }
    return result;
  }

  generateCodeChallenge(code_verifier: string){
    const code_verifier_hash = CryptoJS.SHA256(code_verifier).toString(CryptoJS.enc.Base64);
    const code_challenge = code_verifier_hash
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    return code_challenge;
  }

  request(){
    this.public = this.http.get<Message>("http://localhost:8443/sb-users-identify/api/public");
    this.private = this.http.get<Message>("http://localhost:8443/sb-users-identify/api/private");
    this.privateScoped = this.http.get<Message>(
      "http://localhost:8443/sb-users-identify/api/private-scoped"
    );
    console.log(this.auth.accessToken)
  }
}

export interface Message{
  message:string;
}
 