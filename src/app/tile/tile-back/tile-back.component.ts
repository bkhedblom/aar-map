import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aar-tile-back',
  templateUrl: './tile-back.component.html',
  styleUrls: ['./tile-back.component.css']
})
export class TileBackComponent implements OnInit {

  @Input() imageName: string;
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = "\\assets\\tile-images\\" + this.imageName;
  }

}
