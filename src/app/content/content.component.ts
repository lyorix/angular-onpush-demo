import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private item: any;
  private startX: number;
  private startY: number;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  logCD() {
    console.log('CD content');
  }

  start(event): void {
    this.item = event.target;
    if (!this.startX) {
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
    event.preventDefault();
  }

  move(event): void {
    if (this.item) {
      this.renderer.setStyle(this.item, 'transform', `translate(${event.clientX - this.startX}px,${event.clientY - this.startY}px)`);
    }
  }

  end(): void {
    this.item = undefined;
  }
}
