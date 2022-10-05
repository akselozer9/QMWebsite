import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ComponentComponent } from './ex2-component.component';

describe('Ex2ComponentComponent', () => {
  let component: Ex2ComponentComponent;
  let fixture: ComponentFixture<Ex2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
