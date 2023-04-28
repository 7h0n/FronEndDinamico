import { TestBed } from '@angular/core/testing';

import { PorfolioService } from './porfolio.service';

describe('PorfolioService', () => {
  let service: PorfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
