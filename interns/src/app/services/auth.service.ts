import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../entities/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public logIn = (username: string, password: string): Observable<User> =>
    this.http.post<User>(`${environment.apiUrl}/login`, { username, password })
}
