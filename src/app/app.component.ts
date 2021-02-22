import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSticky = false;

  constructor(
  ) {
  }

  logCD() {
    console.log('CD app');
  }

  @HostListener('window:scroll', ['$event'])
  public scroll() {
    this.handleSticky();
  }

  private handleSticky() {
    if (window.pageYOffset > 0) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
