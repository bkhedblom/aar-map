import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile/tile.model';
import { TileService } from '../services/tile.service';

@Component({
  selector: 'aar-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  get tiles() {
    return this._tileService.tiles;
  }
  constructor(private _tileService:TileService) { }

  ngOnInit() {
  }

}
