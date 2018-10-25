import { Component, OnInit, Input } from '@angular/core';
import { EmojiService } from './emoji.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'emoji',
  template: `
    <span [innerHTML]="image"></span>
  `,
  styles: [],
})
export class EmojiComponent implements OnInit {
  @Input()
  shortname: string;
  image: string;

  constructor(private emojiService: EmojiService) {}

  ngOnInit() {
    this.image = this.emojiService.shortnameToImage(this.shortname);
  }
}
