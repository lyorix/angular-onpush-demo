import {ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css'],
})
export class ContentItemComponent implements OnInit {

  value = 'content';

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('timeout');
      this.value = 'new content';
      this.cdr.markForCheck();
    });
  }

  move() {
    console.log('move');
    this.value = 'moving content';
    this.cdr.markForCheck();
  }

  displayHello() {
    console.log('display hello');
    return 'Some ' + this.value;
  }

  logCD() {
    console.log('CD content-item');
  }

}
