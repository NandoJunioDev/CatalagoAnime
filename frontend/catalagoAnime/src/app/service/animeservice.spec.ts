import { TestBed } from '@angular/core/testing';

import { Animeservice } from './animeservice';

describe('Animeservice', () => {
  let service: Animeservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Animeservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
