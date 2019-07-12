import { TestBed } from '@angular/core/testing';

import { BeerService } from '../beer-service';
import { HttpClientModule } from '@angular/common/http';

describe('BeerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });
});
