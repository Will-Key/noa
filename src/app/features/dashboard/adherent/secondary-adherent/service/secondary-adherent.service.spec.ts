import { TestBed } from '@angular/core/testing';

import { SecondaryAdherentService } from './secondary-adherent.service';

describe('SecondaryAdherentService', () => {
  let service: SecondaryAdherentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryAdherentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
