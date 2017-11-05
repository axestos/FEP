import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTerugnemenComponent } from './product-terugnemen.component';

describe('ProductTerugnemenComponent', () => {
  let component: ProductTerugnemenComponent;
  let fixture: ComponentFixture<ProductTerugnemenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTerugnemenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTerugnemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
