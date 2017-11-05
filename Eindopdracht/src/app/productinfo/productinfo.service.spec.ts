import { TestBed, inject } from '@angular/core/testing';

import { ProductinfoService } from './productinfo.service';

describe('ProductinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductinfoService]
    });
  });

  it('should be created', inject([ProductinfoService], (service: ProductinfoService) => {
    expect(service).toBeTruthy();
  }));
});
