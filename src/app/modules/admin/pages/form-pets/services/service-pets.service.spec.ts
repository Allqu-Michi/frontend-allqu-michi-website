import { TestBed } from '@angular/core/testing';

import { ServicePetsService } from './service-pets.service';

describe('ServicePetsService', () => {
  let service: ServicePetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
