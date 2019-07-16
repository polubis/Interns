import { Injectable } from '@angular/core';

import { userMock, usersMock } from '../__mocks__/users';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUser = (id: number) => of(usersMock[id]).pipe(delay(1000));
}
