import { Injectable } from '@angular/core';
import * as EmojiOne from 'emojione';

@Injectable({
  providedIn: 'root',
})
export class EmojiService {
  public shortnameToImage(shortname: string): string {
    return EmojiOne.shortnameToImage(shortname);
  }

  public unicodeToShortname(unicode: string): string {
    return EmojiOne.toShort(unicode);
  }

  public unicodeToImage(unicode: string): string {
    return EmojiOne.unicodeToImage(unicode);
  }

  public convertText(text: string): string {
    return EmojiOne.toImage(text);
  }
}
