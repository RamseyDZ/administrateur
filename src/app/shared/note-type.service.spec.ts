import { TestBed } from '@angular/core/testing';

import { NoteTypeService } from './note-type.service';

describe('NoteTypeService', () => {
  let service: NoteTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
