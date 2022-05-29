import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamV2Component } from './add-team-v2.component';

describe('AddTeamV2Component', () => {
  let component: AddTeamV2Component;
  let fixture: ComponentFixture<AddTeamV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
