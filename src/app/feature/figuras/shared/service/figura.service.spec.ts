import { TestBed } from '@angular/core/testing';

import { FiguraService } from './figura.service';

describe('FiguraService', () => {
  let service: FiguraService;

  private urlEndPoint:string = 'http://localhost:8080/api/figuras/disponibles';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiguraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
