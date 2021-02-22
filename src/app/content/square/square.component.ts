import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  logCD() {
    console.log('CD square');
  }
}
