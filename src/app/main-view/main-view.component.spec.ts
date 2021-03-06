import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';
import { Component, Input } from '@angular/core';
import { Tile } from '../tile/tile.model';

describe('MainViewComponent', () => {
@Component({
  selector: 'aar-grid',
  template: ''
})
class GridComponentStub{
  @Input() rows:Tile[][];
}

  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainViewComponent, 
        GridComponentStub 
      ]
    })
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
