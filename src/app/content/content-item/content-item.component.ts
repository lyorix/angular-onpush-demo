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
    setTimeout(() => {
      console.log('timeout');
      this.value = 'new content';
    });
  }

  displayHello() {
    console.log('display hello');
    return 'Some ' + this.value;
  }

  logCD() {
    console.log('CD content-item');
  }

}
