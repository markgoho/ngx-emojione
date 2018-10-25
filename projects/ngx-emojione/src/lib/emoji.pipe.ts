import { Pipe, PipeTransform } from '@angular/core';
import { EmojiService } from './emoji.service';

@Pipe({
  name: 'emoji',
})
export class EmojiPipe implements PipeTransform {
  constructor(private emojiService: EmojiService) {}

  transform(text: string): string {
    return this.emojiService.convertText(text);
  }
}
