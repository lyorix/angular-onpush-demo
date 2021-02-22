import {Component, NgZone, OnInit, Renderer2} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private item: any;
  private startX: number;
  private startY: number;
  private moveSubscription: Subscription;

  constructor(private renderer: Renderer2,
              private zone: NgZone) {
  }

  ngOnInit() {
  }

  logCD() {
    console.log('CD content');
  }

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
