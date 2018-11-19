import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  tileText:string;
  tilefaceDown: boolean;
  constructor() { }

  ngOnInit() {
  }

  switchFace(){
    this.tilefaceDown = !this.tilefaceDown;
  }

}
