import { TestBed } from '@angular/core/testing';

import { PersonneService } from './personne.service';

describe('PersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonneService = TestBed.get(PersonneService);
    expect(service).toBeTruthy();
  });
});
