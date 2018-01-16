import { TestBed, inject } from '@angular/core/testing';

import { HistoriqueVotesService } from './historique-votes.service';

describe('HistoriqueVotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriqueVotesService]
    });
  });

  it('should be created', inject([HistoriqueVotesService], (service: HistoriqueVotesService) => {
    expect(service).toBeTruthy();
  }));
});
