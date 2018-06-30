/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminauthenticateService } from './adminauthenticate.service';

describe('AdminauthenticateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminauthenticateService]
    });
  });

  it('should ...', inject([AdminauthenticateService], (service: AdminauthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
