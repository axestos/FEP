import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeningAanvragenComponent } from './lening.aanvragen.component';

describe('LeningAanvragenComponent', () => {
  let component: LeningAanvragenComponent;
  let fixture: ComponentFixture<LeningAanvragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeningAanvragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeningAanvragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
