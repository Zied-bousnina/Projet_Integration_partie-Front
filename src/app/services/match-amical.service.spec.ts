import { TestBed } from '@angular/core/testing';

import { MatchAmicalService } from './match-amical.service';

describe('MatchAmicalService', () => {
  let service: MatchAmicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchAmicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
