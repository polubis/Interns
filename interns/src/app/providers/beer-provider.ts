import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Beer } from '../entities/Beer';
import { BeerService } from '../services/beer-service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerProvider {
  public beer = new Subject<Beer>();

  public beers = new Subject<Beer[]>();

  constructor(private beerService: BeerService) {}

  public handleGetBeer = (): void => {
    this.beerService.getBeer(1).subscribe(beer => {
      this.beer.next(beer);
    });
  }

  public handleGetBeers = (): void => {
    this.beerService.getBeers(1, 15).subscribe(beers => {
      this.beers.next(beers);
    });
  }

  private addBeerToBeers = (beer: Beer) => {
    this.beers.pipe(take(1)).subscribe((actualBeers: Beer[]) => {
      this.beers.next([...actualBeers, beer]);
    });
  }

  private removeBeerFromBeers = (id: number) => {
    this.beers.pipe(take(1)).subscribe((beers: Beer[]) => {
      this.beers.next(beers.filter(beer => beer.id !== id));
    });
  }
}
