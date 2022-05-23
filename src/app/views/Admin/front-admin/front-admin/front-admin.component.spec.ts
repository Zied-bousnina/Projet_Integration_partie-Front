import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAdminComponent } from './front-admin.component';

describe('FrontAdminComponent', () => {
  let component: FrontAdminComponent;
  let fixture: ComponentFixture<FrontAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
