import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.setHeader(request));
  }

  private setHeader(request: HttpRequest<unknown>) {
    const accessControl = {
      'Access-Control-Allow-Origin':'*'
    }
    return request.clone({
      setHeaders: accessControl
    })
  }
}
