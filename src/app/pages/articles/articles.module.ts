import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import {
  MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatMenuModule,
  MatCardModule, MatButtonModule
} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { ArticlesService } from './services/articles.service';

const articlesRouters: Routes = [
  { path: 'artykuły', component: ArticlesListComponent},
  { path: 'artykuły/:id', component: ArticleComponent}
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild(articlesRouters)
  ],
  declarations: [
    ArticleComponent,
    ArticlesListComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
