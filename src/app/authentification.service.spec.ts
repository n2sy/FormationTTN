import { TestBed } from '@angular/core/testing';

import { AuthentificationService } from './authentification.service';

describe('AuthentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentificationService = TestBed.get(AuthentificationService);
    expect(service).toBeTruthy();
  });
});
