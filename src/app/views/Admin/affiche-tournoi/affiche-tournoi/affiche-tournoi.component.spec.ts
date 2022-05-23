import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheTournoiComponent } from './affiche-tournoi.component';

describe('AfficheTournoiComponent', () => {
  let component: AfficheTournoiComponent;
  let fixture: ComponentFixture<AfficheTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheTournoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
