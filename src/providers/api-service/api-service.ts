import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  private apiUrl: string;
  public userInput: string;
  public centers;
  public centersSub: Subject<any> = new Subject();


  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }

  public getCenters(api) {
    this.apiUrl = `http://api.earth911.com/=${api.userInput}&api_key=(//api-key here))`;
    return this.http.get(`${this.apiUrl}`);
  }

  // public centersObservable() {
  //   return this.centersObservable.setObservable();
  // }

  // publis setCenters(centers) {
  //   this.centers = centers;
  //   this.centersSub.next({
  //     data: centers });
  // }


}
