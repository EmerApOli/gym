import { TestBed, inject } from '@angular/core/testing';

import { AgendartreinoService } from './agendartreino.service';

describe('AgendartreinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendartreinoService]
    });
  });

  it('should be created', inject([AgendartreinoService], (service: AgendartreinoService) => {
    expect(service).toBeTruthy();
  }));
});
