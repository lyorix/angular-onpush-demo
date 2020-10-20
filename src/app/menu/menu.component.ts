import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  action1 = {title: 'Action1'};
  action2 = {title: 'Action2'};
  action3 = {title: 'Action3'};

  constructor() { }

  ngOnInit() {
  }

  logCD() {
    console.log('CD menu');
  }

  changeAction3Name() {
    this.action3 = {title: 'Action' + Math.floor(Math.random() * Math.floor(100))};
  }
}
