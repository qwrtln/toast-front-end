import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FacebookService } from './services/facebook.service';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    PagesModule
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
