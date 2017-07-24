import { Component, OnInit, HostBinding } from '@angular/core';
import { TextService } from '../../../services/text.service';
import { fadeInAnimation } from '../../../animations/fade-in.animation';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
  animations: [fadeInAnimation]
})

export class ArticlesListComponent implements OnInit {

  articles: Article[];
  selectedArticle;

  constructor(private textService: TextService, private titleService: Title, private articlesService: ArticlesService) { }

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.titleService.setTitle('Artykuły - Toastmasters Students Kraków');
    this.articlesService.getArticles().subscribe(
      response => { this.articles = response; }
    );
  }

}

class Article {
  title: String;
  id: String;
  paragraphs: String[];
}

