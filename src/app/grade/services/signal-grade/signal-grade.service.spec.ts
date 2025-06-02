import { TestBed } from '@angular/core/testing';

import { SignalGradeService } from './signal-grade.service';

describe('SignalGradeService', () => {
  let service: SignalGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
