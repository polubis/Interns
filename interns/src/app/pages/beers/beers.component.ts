import { Component, OnInit } from '@angular/core';
import { BeerProvider } from 'src/app/providers/beer-provider';
import { of, interval } from 'rxjs';
import { mergeMap, map, concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  constructor(private beerProvider: BeerProvider) {}

  letters = of(['a', 'b', 'c']);

  interval$ = interval(1000);

  normalMapExample$ = this.letters.pipe(
    map(letters => this.interval$.pipe(map(intervalTick => '' + intervalTick + letters)))
  );

  mergeExample$ = this.letters.pipe(
    mergeMap(letters => {
      return this.interval$.pipe(map(intervalTick => '' + intervalTick + letters));
    })
  );

  numbers = of(2000, 1000);

  concatMapExample$ = this.numbers.pipe(
    concatMap(value => {
      return of(`Delayed ${value}ms`).pipe(delay(4000));
    })
  );

  mergeMapExample2$ = this.numbers.pipe(
    mergeMap(value => {
      return of(`Delayed ${value}ms`).pipe(delay(4000));
    })
  );

  //   //emit delay value
  // const source = of(2000, 1000);
  // // map value from source into inner observable, when complete emit result and move to next
  // const example = source.pipe(
  //   concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  // );
  // //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
  // const subscribe = example.subscribe(val =>
  //   console.log(`With concatMap: ${val}`)
  // );

  // // showing the difference between concatMap and mergeMap
  // const mergeMapExample = source
  //   .pipe(
  //     // just so we can log this after the first example has run
  //     delay(5000),
  //     mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  //   )
  //   .subscribe(val => console.log(`With mergeMap: ${val}`));

  ngOnInit() {}
}
