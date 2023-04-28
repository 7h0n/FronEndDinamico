import { TestBed } from '@angular/core/testing';

import { PofolioService } from './pofolio.service';

describe('PofolioService', () => {
  let service: PofolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PofolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
