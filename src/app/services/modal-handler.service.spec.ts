import { TestBed } from '@angular/core/testing';

import { ModalHandlerService } from './modal-handler.service';

describe('ModalHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalHandlerService = TestBed.get(ModalHandlerService);
    expect(service).toBeTruthy();
  });
});
