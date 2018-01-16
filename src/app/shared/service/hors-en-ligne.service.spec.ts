import { TestBed, inject } from '@angular/core/testing';

import { HorsEnLigneService } from './hors-en-ligne.service';

describe('HorsEnLigneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorsEnLigneService]
    });
  });

  it('should be created', inject([HorsEnLigneService], (service: HorsEnLigneService) => {
    expect(service).toBeTruthy();
  }));
});
