import { Injectable, ViewChild } from '@angular/core';
import { User } from '../entities/User';
import { Subject, throwError, BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';
import { tap, catchError, map, switchMap, mergeMap, debounce, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {
  public user = new Subject<User>();

  public users = new Subject<User[]>();

  constructor(private userService: UserService) {}

  // For easy examples - just fetch static data

  user$ = this.userService.getUser(1).pipe(
    tap(userData => {
      // console.log('UserData from service');
    }),
    catchError(error => {
      return throwError(error);
    })
  );

  // For examples where some mapping needs to be done

  userLoaded = new BehaviorSubject<number>(1);

  userLoaded$ = this.userLoaded.asObservable().pipe(
    // debounceTime(150),
    map(userId => {
      console.log(userId);
      return userId - 1;
    }),
    mergeMap(userId => {
      // console.log(userId);
      return this.userService.getUser(userId).pipe(
        tap(() => {
          // console.log('Is user data loading');
          // throw new Error('Something went wrong while loading data');
        }),
        catchError(error => {
          // console.log(error.message);
          return throwError(error.message);
        })
      );
    })
  );

  // switchMap - waiting for last emitted observable and emitting value
  // mergeMap - emitting value
  // 

  public handleGetUser = () => {};

  public handleGetUsers = () => {};
}
