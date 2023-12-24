import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getAccessToken();
    if (token!=null && req.url.includes('resource')) {
      intReq = req.clone({headers:req.headers.set('Authorization', 'Bearer '+token)})
    }
    return next.handle(intReq);
  }

}
