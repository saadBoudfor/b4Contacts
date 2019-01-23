import { TestBed } from '@angular/core/testing';

import { ContactHandlerService } from './contacthandler.service';

describe('ContactHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactHandlerService = TestBed.get(ContactHandlerService);
    expect(service).toBeTruthy();
  });
});
