import { TestBed } from '@angular/core/testing';

import { FormControlApiService } from './form-control-api.service';

describe('FormControlApiService', () => {
  let service: FormControlApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
