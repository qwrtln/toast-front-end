import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextService } from '../services/text.service';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule

  ],
  declarations: [
    HeaderComponent,
    DateFormatPipe
  ],
  exports: [
    HeaderComponent,
    DateFormatPipe
  ],
  providers: [
    TextService
  ]
})
export class SharedModule { }
