import { Component, OnInit } from '@angular/core';
import { BeerProvider } from 'src/app/providers/beer-provider';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  constructor(private beerProvider: BeerProvider) {}

  ngOnInit() {}
}
