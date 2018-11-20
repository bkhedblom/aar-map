import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile/tile.model';

@Component({
  selector: 'aar-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  tile = new Tile("Hello aardvarks!");
  constructor() { }

  ngOnInit() {
  }

}
