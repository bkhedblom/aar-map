import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
