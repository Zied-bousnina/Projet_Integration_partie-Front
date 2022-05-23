import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTournoiComponent } from './match-tournoi.component';

describe('MatchTournoiComponent', () => {
  let component: MatchTournoiComponent;
  let fixture: ComponentFixture<MatchTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTournoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
