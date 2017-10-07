import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../../animations/fade-in.animation';
import { TextService } from '../../../services/text.service';
import { Title } from '@angular/platform-browser';
import {ArticlesService} from "../services/articles.service";

declare const require: any;

@Component({
  selector: 'articles-articles',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  animations: [fadeInAnimation]
})

export class ArticleComponent implements OnInit {

  articles: Article[];

  selectedArticle = null;

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
              private textService: TextService, private titleService: Title,
              private articlesService: ArticlesService) {
  }

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.route.params.subscribe((a) => {
      this.articlesService.getArticles().subscribe(
        response => {
          this.articles = response;
          this.setArticleTitleById(a.id);
          this.titleService.setTitle(`${this.selectedArticle.title} - Toastmasters Students Kraków`);
        }
      );
    });
  }


}

class Article {
  title: String;
  id: String;
  paragraphs: String[];
}
