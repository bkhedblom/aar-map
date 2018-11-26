import { Injectable } from '@angular/core';
import { Tile } from '../tile/tile.model';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  tiles = [
    [new Tile("Tile 0"), new Tile("Tile 1"), new Tile("Surprise aardvarks!")],
    [new Tile("Tile 3"), new Tile("LOOT!"), new Tile("Even more aardvarks")],
    [new Tile("Tile 6 (now on row 2!)"), new Tile("Tile 7"), new Tile("Row 2, tile 2")]  
  ];
  constructor() { }
}
