import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerV2Component } from './add-player-v2.component';

describe('AddPlayerV2Component', () => {
  let component: AddPlayerV2Component;
  let fixture: ComponentFixture<AddPlayerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayerV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
