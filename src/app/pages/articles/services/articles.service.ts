import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { BackendHttpService } from '../../../services/backend-http.service';
import 'rxjs/add/observable/of';

@Injectable()
export class ArticlesService extends BackendHttpService {

  articles: any[] = null;

  constructor(protected http: Http) {
    super();
  }

  public getArticles(): Observable<any> {
    const endpoint = 'articles';
    if (this.articles == null) {
      return this.http.get(this.createEndpoint(endpoint)).map((res: Response) => {
        this.articles = res.json();
        return res.json();
      });
    } else {
      return Observable.of(this.articles);
    }
  }

}
