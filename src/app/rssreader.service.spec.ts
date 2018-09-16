import { TestBed, inject } from '@angular/core/testing';

import { RSSReaderService } from './rssreader.service';

describe('RSSReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RSSReaderService]
    });
  });

  it('should be created', inject([RSSReaderService], (service: RSSReaderService) => {
    expect(service).toBeTruthy();
  }));
});
