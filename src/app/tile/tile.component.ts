import { Component, OnInit, Input } from '@angular/core';
import { Tile } from 'src/app/tile/tile.model';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'aar-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;

  imageName: string = "background.png"; // TODO: Kanske sätta det här på något annat vis..?

  get textToDisplay(): string {
    return this.tile.isFaceUp ? this.tile.text : "";
  }

  get isFaceUp() {
    return this.tile.isFaceUp;
  }

  get isFaceDown() {
    return !this.tile.isFaceUp;
  }

  constructor() { }

  ngOnInit() {
  }

  switchFace() {
    this.tile.isFaceUp = !this.tile.isFaceUp;
  }

}
