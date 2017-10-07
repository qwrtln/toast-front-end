import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { BackendHttpService } from './backend-http.service';
import 'rxjs/add/observable/of';

@Injectable()
export class FaqService extends BackendHttpService {

  questions: any[] = null;

  constructor(protected http: Http) {
    super();
  }

  public getQuestions(): Observable<any> {
    const endpoint = 'questions';
    if (this.questions == null) {
      return this.http.get(this.createEndpoint(endpoint)).map((res: Response) => {
        this.questions = res.json();
        return res.json();
      });
    } else {
      return Observable.of(this.questions);
    }
  }

}
