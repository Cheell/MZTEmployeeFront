import { TestBed } from '@angular/core/testing';

import { EmploeeService } from './emploee.service';

describe('EmploeeService', () => {
  let service: EmploeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
