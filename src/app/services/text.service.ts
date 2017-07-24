import { Injectable } from '@angular/core';

@Injectable()
export class TextService {

  constructor() { }

  private shortenDescription(desc: string, maxLenght: number): string {
    if (desc.length < maxLenght) {
      return desc;
    } else {
      return desc.substring(0, maxLenght) + '...';
    }
  }

  private addHardSpaces(text: string): string {
    const regex = /\s(i|u|w|z|o|a|na|we|do|ze|od|bo|ponieważ)\s/gi;
    return text.replace(regex, ' $1&nbsp;');
  }

}
