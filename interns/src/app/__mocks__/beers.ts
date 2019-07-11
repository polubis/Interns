import { Beer } from '../entities/Beer';

export const beersMock: Beer[] = [
  new Beer(1, 'Warka', 'Really cool beer', '', 'https/some-picture-url'),
  new Beer(2, 'Perła', 'Really cool beer', '', 'https/some-picture-url'),
  new Beer(3, 'Tyskie', 'Really cool beer', '', 'https/some-picture-url'),
];

export const beerMock: Beer = beersMock[0];

