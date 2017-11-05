import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUitlenenComponent } from './product-uitlenen.component';

describe('ProductUitlenenComponent', () => {
  let component: ProductUitlenenComponent;
  let fixture: ComponentFixture<ProductUitlenenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUitlenenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUitlenenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
