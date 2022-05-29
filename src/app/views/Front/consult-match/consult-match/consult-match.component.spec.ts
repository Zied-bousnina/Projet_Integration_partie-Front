import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMatchComponent } from './consult-match.component';

describe('ConsultMatchComponent', () => {
  let component: ConsultMatchComponent;
  let fixture: ComponentFixture<ConsultMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
