import {AfterViewInit, Component, NgZone, OnDestroy, Renderer2} from '@angular/core';
import {fromEvent, Subject, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private item: any;
  private startX: number;
  private startY: number;
  private moveSubscription: Subscription;
  private unsubscribe$ = new Subject<void>();
  isSticky = false;

  constructor(
    private zone: NgZone,
    private renderer: Renderer2,
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

  start(event): void {
    this.zone.runOutsideAngular(() => {
      this.item = event.target;
      if (!this.startX) {
        this.startX = event.clientX;
        this.startY = event.clientY;
      }
      this.moveSubscription = fromEvent(document, 'mousemove').subscribe(evt => this.move(evt));
      event.preventDefault();
    });
  }

  move(event): void {
    if (this.item) {
      this.renderer.setStyle(this.item, 'transform', `translate(${event.clientX - this.startX}px,${event.clientY - this.startY}px)`);
    }
  }

  end(): void {
    if (this.item) {
      this.moveSubscription.unsubscribe();
      this.item = undefined;
    }
  }
}
