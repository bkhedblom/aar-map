import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { MainViewComponent } from './main-view/main-view.component';
import { TileRowComponent } from './tile-row/tile-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    MainViewComponent,
    TileRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
