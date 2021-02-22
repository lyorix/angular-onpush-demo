import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnDestroy  {
  private unsubscribe$ = new Subject<void>();
  isSticky = false;

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
  }

  logCD() {
    console.log('CD app');
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      fromEvent(document, 'scroll').pipe(takeUntil(this.unsubscribe$)).subscribe(evt => this.sticky());
    });
  }

  private sticky() {
    if (window.pageYOffset > 0) {
      if (!this.isSticky) {
        this.zone.run(() => {
          this.isSticky = true;
          this.cdr.markForCheck();
        });
      }
    } else {
      if (this.isSticky) {
        this.zone.run(() => {
          this.isSticky = false;
          this.cdr.markForCheck();
        });
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
