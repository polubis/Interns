import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersComponent } from './beers.component';
import { BeerProvider } from 'src/app/providers/beer-provider';
import { HttpClientModule } from '@angular/common/http';

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeersComponent],
      imports: [HttpClientModule],
      providers: [BeerProvider]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
