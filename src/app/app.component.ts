import {Component, NgZone, Renderer2} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private item: any;
  private startX: number;
  private startY: number;
  private moveSubscription: Subscription;

  constructor(
    private zone: NgZone,
    private renderer: Renderer2,
  ) {
  }

  logCD() {
    console.log('CD app');
  }

  start(event): void {
    this.zone.runOutsideAngular(() => {
      this.item = event.target;
      if (!this.startX) {
        this.startX = event.clientX;
        this.startY = event.clientY;
      }
      // this.moveSubscription = fromEvent(document, 'mousemove').subscribe(evt => this.move(evt));
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
