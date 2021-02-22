import {AfterViewInit, Component, NgZone, OnDestroy} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isSticky = false;

  constructor(
    private zone: NgZone,
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
        });
      }
    } else {
      if (this.isSticky) {
        this.zone.run(() => {
          this.isSticky = false;
        });
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // @HostListener('window:scroll', ['$event'])
  // public scroll(event) {
  //   this.isSticky = this.element.nativeElement.offsetTop < 0 ?
  //     false : window.pageYOffset > this.element.nativeElement.offsetTop;
  // }
}
