import { NgModule } from '@angular/core';
import { EmojiComponent } from './emoji.component';
import { EmojiPipe } from './emoji.pipe';

@NgModule({
  imports: [],
  declarations: [EmojiComponent, EmojiPipe],
  exports: [EmojiComponent, EmojiPipe],
})
export class NgxEmojioneModule {}
