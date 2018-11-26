import { TestBed } from '@angular/core/testing';

import { TileService } from './tile.service';
import { Tile } from '../tile/tile.model';

describe('TileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TileService = TestBed.get(TileService);
    expect(service).toBeTruthy();
  }); 

  it('should have tiles property available right after creation', () => {
    const service:TileService = TestBed.get(TileService);
    expect(service.tiles).toBeTruthy();
  });

  it('should provide tiles', () => {
    const service:TileService = TestBed.get(TileService);

    service.tiles.forEach((row) => {
      expect(row.length).toBeGreaterThan(0);
      row.forEach((item) => 
        expect(item instanceof Tile).toBe(true))
    });
  });

  it('should provide more than one tile per row', () => {
    const service:TileService = TestBed.get(TileService);

    service.tiles.forEach((row) => 
      expect(row.length).toBeGreaterThan(1))
  });

  it('should provide at least two rows', () => {
    const service:TileService = TestBed.get(TileService);
    expect(service.tiles.length).toBeGreaterThanOrEqual(2);
  });
});
