import { TestBed } from '@angular/core/testing';

import { ExtractorServiceService } from './extractor-service.service';

describe('ExtractorServiceService', () => {
  let service: ExtractorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
