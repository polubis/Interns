import { User } from '../entities/User';

export const usersMock: User[] = [
  new User(1, 'jarus@wp.pl', 'jaro1994', new Date()),
  new User(2, 'random', 'wojo-kolo', new Date()),
  new User(3, 'jarus@wp.p3l', 'jaro19945', new Date())
];

export const userMock: User = usersMock[0];

