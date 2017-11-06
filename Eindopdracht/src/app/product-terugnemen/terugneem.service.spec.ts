import { TestBed, inject } from '@angular/core/testing';

import { TerugneemService } from './terugneem.service';

describe('TerugneemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerugneemService]
    });
  });

  it('should be created', inject([TerugneemService], (service: TerugneemService) => {
    expect(service).toBeTruthy();
  }));
});
