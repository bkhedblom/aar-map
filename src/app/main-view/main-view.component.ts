import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile/tile.model';

@Component({
  selector: 'aar-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  tiles = [
    [new Tile("Tile 0"), new Tile("Tile 1"), new Tile("Surprise aardvarks!")],
    [new Tile("Tile 3"), new Tile("LOOT!"), new Tile("Even more aardvarks")],
    [new Tile("Tile 6 (now on row 2!)"), new Tile("Tile 7"), new Tile("Row 2, tile 2")]  
  ];
  constructor() { }

  ngOnInit() {
  }

}
