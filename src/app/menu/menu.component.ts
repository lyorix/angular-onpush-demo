import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  actions: Array<any> = [{ title: 'Action1' }, { title: 'Action2' }, { title: 'Action3' }];

  constructor() { }

  ngOnInit() {
  }

  logCD() {
    console.log('CD menu');
  }

  changeAction3Name() {
    console.log('action');
    this.actions[2] = {title: 'Action' + Math.floor(Math.random() * Math.floor(100))};
  }
}
