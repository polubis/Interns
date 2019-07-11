import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // FOR JWT TOKEN AUTHORIZATION
    // const request = req.clone({
    //   headers: req.headers.set('Authorization', 'Bearer ' + this.authService.token)
    // });

    // FOR SESSION HTTP ONLY AUTHORIZATION

    const request = req.clone({
      withCredentials: true
    });

    return next.handle(request);
  }
}
