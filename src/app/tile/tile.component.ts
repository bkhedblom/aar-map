import { Component, OnInit, Input } from '@angular/core';
import { Tile } from 'src/app/tile/tile.model';

@Component({
  selector: 'aar-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile:Tile;
  get textToDisplay():string{
    return this.tile.isFaceUp ? this.tile.text : "";
  }
  get tilefaceDown(): boolean{
    return !this.tile.isFaceUp
  }
  set tilefaceDown(value){
    this.tile.isFaceUp = !value;
  }
  constructor() { }

  ngOnInit() {
    if(!this.tile){
      this.tile = new Tile("Empty tile");
      this.tile.isFaceUp = true;
    }
  }

  switchFace(){
    this.tilefaceDown = !this.tilefaceDown;
  }

}
