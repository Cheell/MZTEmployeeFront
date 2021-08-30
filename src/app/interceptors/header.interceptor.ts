import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('https://localhost:44303/EmployeeData/')) {
      request = request.clone({
        setHeaders: {
          AuthSecretToken: `4723c269-57aa-4a4f-9439-439b695de6d1`
        }
      });
    }
    return next.handle(request);
  }
}
