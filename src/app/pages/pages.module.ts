///<reference path="../../../node_modules/@angular/router/src/router_module.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ArticlesModule } from './articles/articles.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdListModule, MdIconModule, MdButtonModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const appRouters: Routes = [
  { path: '', component: MainComponent },
  { path: 'artykuły',
    loadChildren: 'app/pages/articles/articles.module#ArticlesModule' },
  { path: 'pytania', component: FaqComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'dziekujemy', component: ThankYouComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArticlesModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    RouterModule.forRoot(appRouters),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyARGZcd1RxX_J64L-bWCycUij_nbL-wG7w'})
  ],
  declarations: [
    NotFoundComponent,
    MainComponent,
    FaqComponent,
    ContactComponent,
    ThankYouComponent,
    PagesComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
