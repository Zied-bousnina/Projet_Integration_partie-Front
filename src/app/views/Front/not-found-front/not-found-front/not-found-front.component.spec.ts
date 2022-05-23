import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundFrontComponent } from './not-found-front.component';

describe('NotFoundFrontComponent', () => {
  let component: NotFoundFrontComponent;
  let fixture: ComponentFixture<NotFoundFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
