import { TestBed } from '@angular/core/testing';

import { EmojiService } from './emoji.service';

describe('NgxEmojioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmojiService = TestBed.get(EmojiService);
    expect(service).toBeTruthy();
  });
});
