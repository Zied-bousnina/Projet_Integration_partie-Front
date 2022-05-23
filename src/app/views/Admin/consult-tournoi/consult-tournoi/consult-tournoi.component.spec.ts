import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTournoiComponent } from './consult-tournoi.component';

describe('ConsultTournoiComponent', () => {
  let component: ConsultTournoiComponent;
  let fixture: ComponentFixture<ConsultTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultTournoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
