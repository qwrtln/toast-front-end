import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FacebookService } from './services/facebook.service';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import {FaqService} from "./services/faq.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    PagesModule
  ],
  providers: [FacebookService, FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
