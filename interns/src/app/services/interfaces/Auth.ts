import { Observable } from 'rxjs';

import { User } from 'src/app/entities/User';

export interface Auth {
  logIn: (username: string, password: string) => Observable<User>;
}
