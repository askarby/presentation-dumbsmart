import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Data } from './data.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  public getCars(): Observable<Data[]> {
    return this.http.get('/assets/cars.json').map(response => response.json());
  }

}
