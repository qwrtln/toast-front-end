import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { BackendHttpService } from '../../../services/backend-http.service';

@Injectable()
export class ArticlesService extends BackendHttpService {

  constructor(protected http: Http) {
    super();
  }

  public getArticles(): Observable<any> {
    const endpoint = 'articles';
    return this.http.get(this.createEndpoint(endpoint)).map((res: Response) => res.json());
  }

}
