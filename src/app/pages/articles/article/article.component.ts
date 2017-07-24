import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../../animations/fade-in.animation';
import { TextService } from '../../../services/text.service';
import { Title } from '@angular/platform-browser';

declare const require: any;
const data = require('../articles.content.json');

@Component({
  selector: 'articles-articles',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  animations: [fadeInAnimation]
})

export class ArticleComponent implements OnInit {

  articles: Article[] = data;

  selectedArticle;

  public setArticleTitle(article: any) {
    this.selectedArticle = article;
  }

  public setArticleTitleById(id: String) {
    this.selectedArticle = null;
    for (const a of this.articles) {
      if (a.id === id) {
        this.selectedArticle = a;
      }
    }
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private textService: TextService, private titleService: Title) {
  }

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.route.params.subscribe((a) => {
      this.setArticleTitleById(a.id);
      this.titleService.setTitle(`${this.selectedArticle.title} - Toastmasters Students Kraków`);
    });
  }


}

class Article {
  title: String;
  id: String;
  paragraphs: String[];
}
