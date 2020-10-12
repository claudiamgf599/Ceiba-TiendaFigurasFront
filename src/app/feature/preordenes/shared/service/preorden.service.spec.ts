import { TestBed } from '@angular/core/testing';

import { PreordenService } from './preorden.service';

describe('PreordenService', () => {
  let service: PreordenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreordenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
