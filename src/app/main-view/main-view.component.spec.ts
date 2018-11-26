import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';
import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Tile } from '../tile/tile.model';
import { TileService } from '../services/tile.service';

describe('MainViewComponent', () => {
  
  @Component({
    selector: 'aar-grid',
    template: ''
  })
  class GridComponentStub implements OnChanges{
    ngOnChanges(): void {
      renderedTiles = this.rows;
    }
    @Input() rows:Tile[][];
  }
  
  class TileServiceStub{
    tiles:Tile[][];
  }
  
  let renderedTiles:Tile[][];
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  let tileServiceStub:TileServiceStub;
  let gridStub:GridComponentStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainViewComponent, 
        GridComponentStub 
      ],
      providers:[{provide: TileService, useClass: TileServiceStub}]
    });
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    tileServiceStub = TestBed.get(TileService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render grid with tiles from tileService', () => {
    const firstRow = [new Tile("row 0 tile 0"), new Tile("row 0 tile 1")];
    const secondRow = [new Tile("row 1 tile 0"), new Tile("row 1 tile 1")];
    tileServiceStub.tiles =  [
      firstRow,
      secondRow
    ]
    fixture.detectChanges();
    expect(renderedTiles[0]).toEqual(firstRow);
    expect(renderedTiles[1]).toEqual(secondRow);
  });
});
