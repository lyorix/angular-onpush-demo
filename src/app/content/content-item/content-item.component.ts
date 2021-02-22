import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css'],
})
export class ContentItemComponent implements OnInit {

  value = 'content';

  constructor() {
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
    });
  }

  logCD() {
    console.log('CD content-item');
  }

}
