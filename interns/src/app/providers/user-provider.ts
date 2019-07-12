import { Injectable } from '@angular/core';
import { User } from '../entities/User';
import { Subject } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {
  public user = new Subject<User>();

  public users = new Subject<User[]>();

  constructor(private userService: UserService) {}

  public handleGetUser = () => {};

  public handleGetUsers = () => {};
}
