import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor {

  tokenJWT:string ="";

  constructor() {
    if(localStorage.getItem('supabase.auth.token') != null){
      this.tokenJWT= JSON.parse(localStorage.getItem('supabase.auth.token') as string).currentSession.access_token;
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = environment.supabaseKey;
    const Authorization = this.tokenJWT;
    if(!apiKey && !Authorization){
      return next.handle(request);
    }
    
    const headers = request.clone({
      headers: request.headers
      .set('apiKey', apiKey)
      .set('Authorization',`Bearer ${Authorization}`)
    });
    return next.handle(headers);
  }
}
