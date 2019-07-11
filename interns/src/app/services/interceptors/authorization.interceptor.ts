import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // FOR JWT TOKEN AUTHORIZATION
    // const request = req.clone({
    //   headers: req.headers.set('Authorization', 'Bearer ' + this.authService.token)
    // });

    // FOR SESSION AUTHORIZATION

    const request = req.clone({
      withCredentials: true
    });

    // Some auth logic here

    return next
      .handle(request)
      .pipe
      /// Some auth logic here
      ();
  }
}
