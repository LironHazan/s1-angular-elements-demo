import { TestBed } from '@angular/core/testing';

import { SillyButtonService } from './silly-button.service';

describe('SillyButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SillyButtonService = TestBed.get(SillyButtonService);
    expect(service).toBeTruthy();
  });
});
