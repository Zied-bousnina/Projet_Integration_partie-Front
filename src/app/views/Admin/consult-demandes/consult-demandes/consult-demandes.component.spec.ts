import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDemandesComponent } from './consult-demandes.component';

describe('ConsultDemandesComponent', () => {
  let component: ConsultDemandesComponent;
  let fixture: ComponentFixture<ConsultDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
