import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeschikbarehardwareComponent } from './beschikbarehardware.component';

describe('BeschikbarehardwareComponent', () => {
  let component: BeschikbarehardwareComponent;
  let fixture: ComponentFixture<BeschikbarehardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeschikbarehardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeschikbarehardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
