import { TestBed } from '@angular/core/testing';

import { RecruesService } from './recrues.service';

describe('RecruesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruesService = TestBed.get(RecruesService);
    expect(service).toBeTruthy();
  });
});
