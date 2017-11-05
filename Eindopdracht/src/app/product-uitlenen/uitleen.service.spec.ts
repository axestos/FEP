import { TestBed, inject } from '@angular/core/testing';

import { UitleenService } from './uitleen.service';

describe('UitleenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UitleenService]
    });
  });

  it('should be created', inject([UitleenService], (service: UitleenService) => {
    expect(service).toBeTruthy();
  }));
});
