import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentItemComponent implements OnInit {

  value = 'content';

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.refreshContent();
  }

  displayHello() {
    console.log('display hello');
    return 'Some ' + this.value;
  }

  private refreshContent() {
    setTimeout(() => {
      console.log('timeout');
      this.value = 'new content';
      this.cdr.markForCheck();
    });
  }

  logCD() {
    console.log('CD content-item');
  }

}
