import { TestBed } from '@angular/core/testing';

import { JoueurTournoiService } from './joueur-tournoi.service';

describe('JoueurTournoiService', () => {
  let service: JoueurTournoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurTournoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
