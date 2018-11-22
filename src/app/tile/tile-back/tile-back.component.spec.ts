import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileBackComponent } from './tile-back.component';

describe('TileBackComponent', () => {
  let component: TileBackComponent;
  let fixture: ComponentFixture<TileBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
