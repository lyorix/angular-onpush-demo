import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {ContentItemComponent} from './content/content-item/content-item.component';
import {SquareComponent} from './content/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    MenuItemComponent,
    ContentItemComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
