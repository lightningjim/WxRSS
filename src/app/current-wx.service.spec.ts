import { TestBed, inject } from '@angular/core/testing';

import { CurrentWxService } from './current-wx.service';

describe('CurrentWxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentWxService]
    });
  });

  it('should be created', inject([CurrentWxService], (service: CurrentWxService) => {
    expect(service).toBeTruthy();
  }));
});
