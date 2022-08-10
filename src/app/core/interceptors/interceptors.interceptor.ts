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

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cmJsbm9meXNnanpoemNiYmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk4NDQ1OTEsImV4cCI6MTk3NTQyMDU5MX0.bNWMT4iKieYqGnAl2BofjbqNPaor3hj4PqqBLx0B5Qc"
    const Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cmJsbm9meXNnanpoemNiYmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk4NDQ1OTEsImV4cCI6MTk3NTQyMDU5MX0.bNWMT4iKieYqGnAl2BofjbqNPaor3hj4PqqBLx0B5Qc"
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
