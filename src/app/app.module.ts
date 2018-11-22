import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { MainViewComponent } from './main-view/main-view.component';
import { TileRowComponent } from './tile-row/tile-row.component';
import { GridComponent } from './grid/grid.component';
import { TileBackComponent } from './tile/tile-back/tile-back.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    MainViewComponent,
    TileRowComponent,
    GridComponent,
    TileBackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
