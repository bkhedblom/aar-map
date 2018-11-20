import { Component, OnInit, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Tile } from '../tile/tile.model';

@Component({
  selector: 'aar-tile-row',
  templateUrl: './tile-row.component.html',
  styleUrls: ['./tile-row.component.css']
})
export class TileRowComponent implements OnInit {
  @Input() tiles:Tile[];

  constructor() { }

  ngOnInit() {
  }

}
