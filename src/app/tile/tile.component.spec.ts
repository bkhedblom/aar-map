import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponent } from './tile.component';
import { Tile } from './tile.model';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;
  let compiledHtml: HTMLElement;
  let input:Tile;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TileComponent ]
    })
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    compiledHtml = fixture.debugElement.nativeElement;
    input = new Tile("This is a test tile");
    component.tile = input;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render textToDisplay in a p tag', () => {
    component.tile = new Tile("some text");
    fixture.detectChanges();
    expect(compiledHtml.querySelector('p').textContent).toContain(component.textToDisplay, `faceUp: ${component.tile.isFaceUp}`);
    component.switchFace();
    fixture.detectChanges();
    expect(compiledHtml.querySelector('p').textContent).toContain(component.textToDisplay, `faceUp: ${component.tile.isFaceUp}`);
  })

  it('should display the tile text if tile is face up', () => {
    input.isFaceUp = true;
    fixture.detectChanges();
    expect(component.textToDisplay).toEqual(input.text);
  })

  it("should not display text if tile is face down", () => {
    input.isFaceUp = false;
    fixture.detectChanges();
    expect(component.textToDisplay).toEqual("");
  })

  it('should give tile div class face-down if face down', () => {
    input.isFaceUp = false;
    fixture.detectChanges();
    expect(compiledHtml.querySelector('div.tile').classList).toContain("face-down");
  })

  it('should give tile div class face-up if face up', () => {
    input.isFaceUp = true;
    fixture.detectChanges();
    expect(compiledHtml.querySelector('div.tile').classList).toContain("face-up");
  })

  it('should flip tile face when clicked', () => {
    input.isFaceUp = false;
    compiledHtml.querySelector('div.tile').dispatchEvent(new Event("click"));
    expect(input.isFaceUp).toBe(true);
  })
});
