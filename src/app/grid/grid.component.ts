import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../tile/tile.model';

@Component({
  selector: 'aar-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() rows: Tile[][];

  constructor() { }

  ngOnInit() {
  }

}
