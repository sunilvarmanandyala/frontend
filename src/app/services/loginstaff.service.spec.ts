import { TestBed } from '@angular/core/testing';

import { LoginStaffService } from './loginstaff.service';

describe('LoginstaffService', () => {
  let service: LoginStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
