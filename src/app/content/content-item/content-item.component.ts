import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentItemComponent implements OnInit {

  value = 'value';

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener('mousemove', () => this.move());
    setTimeout(() => {
      this.value = 'new value';
      this.cdr.markForCheck();
    });
  }

  move() {
    this.value = 'moving value';
    this.cdr.markForCheck();
  }

  displayHello() {
    return 'hello ' + this.value;
  }

  refresh() {
    // DO NOTHING
  }

  logCD() {
    console.log('CD content-item');
  }

}
