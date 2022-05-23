import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecondAdminComponent } from './add-second-admin.component';

describe('AddSecondAdminComponent', () => {
  let component: AddSecondAdminComponent;
  let fixture: ComponentFixture<AddSecondAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecondAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecondAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
