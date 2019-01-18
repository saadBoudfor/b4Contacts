import { TestBed } from '@angular/core/testing';

import { ContacthandlerService } from './contacthandler.service';

describe('ContacthandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContacthandlerService = TestBed.get(ContacthandlerService);
    expect(service).toBeTruthy();
  });
});
