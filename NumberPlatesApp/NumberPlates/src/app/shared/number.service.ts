import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Number } from './number.model';

@Injectable()
export class NumberService {
  selectedNumber: Number;
  numbers: Number[];
  readonly baseURL = 'http://localhost:3000/numbers';

  constructor(private http : HttpClient) { }

  postNumber(num: Number) {
    return this.http.post(this.baseURL, num);
  }

  getNumberList() {
    return this.http.get(this.baseURL);
  }

  putNumber(num: Number) {
    return this.http.put(this.baseURL + `/${num._id}`, num);
  }

  deleteNumber(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
