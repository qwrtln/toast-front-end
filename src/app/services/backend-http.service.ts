import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

declare const require: any;
const config = require('../../config.json');

// The purpose of this class is to provide an abstract service,
// which loads backend URL from the config.json file and then
// shares it with all its children.
@Injectable()
export abstract class BackendHttpService extends HttpService {

  backendUrl: string;

  constructor() {
    super();
    this.backendUrl = config.backend_url;
  }

  public createEndpoint(method: string) {
    return (this.backendUrl + '/' + method);
  }

}

