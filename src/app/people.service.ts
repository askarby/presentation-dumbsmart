import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Data } from './data.model';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  public getPeople(): Observable<Data[]> {
    return this.http.get('/assets/people.json').map(response => response.json());
  }

}
