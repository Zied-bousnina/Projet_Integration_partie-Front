import { TestBed } from '@angular/core/testing';

import { EquipeTournoiService } from './equipe-tournoi.service';

describe('EquipeTournoiService', () => {
  let service: EquipeTournoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeTournoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
