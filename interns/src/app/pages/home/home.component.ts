import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserProvider } from 'src/app/providers/user-provider';
import {
  tap,
  catchError,
  switchMap,
  takeUntil,
  mergeMap,
  debounce,
  debounceTime
} from 'rxjs/operators';
import { of, Subject, Subscription, fromEvent } from 'rxjs';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('button') button;

  constructor(private userProvider: UserProvider) {}

  loadedUserCount = 1;
  error = '';
  isLoading = true;

  loadingStopped$ = new Subject<void>();

  user$ = this.userProvider.userLoaded$.pipe(
    tap(() => {
      this.error = '';
    }),
    catchError(error => {
      this.error = error;
      return of(null);
    }),
    tap(userData => {
      this.isLoading = false;
      if (this.loadedUserCount > 3) {
        this.loadedUserCount = 1;
      }
    })
  );

  loadOtherUser() {
    this.isLoading = true;
    this.loadedUserCount += 1;
    this.userProvider.userLoaded.next(this.loadedUserCount > 3 ? 1 : this.loadedUserCount);
  }

  onStopLoadingOtherUser() {
    this.loadingStopped$.next();
  }

  onAnimationStart() {

  }

  onAnimationStop() {
    
  }

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        debounceTime(150),
        tap(() => {
          alert('Show prompt started');
        })
      )
      .subscribe();
  }
}
