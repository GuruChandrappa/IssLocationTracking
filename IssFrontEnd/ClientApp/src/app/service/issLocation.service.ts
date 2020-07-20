import { Injectable } from '@angular/core';
import { IssLocationModel } from '../models/issLocation-model';
import { Constants } from '../common/constants';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IssLocationService {

  constructor(private http : HttpClient) { }

  // private
  private isGetIsLocationStarted : boolean = false;
  private weatherUpdate : BehaviorSubject<IssLocationModel> =  new BehaviorSubject<IssLocationModel>(null);
  private errorFeed : BehaviorSubject<string> = new BehaviorSubject<string>(null);

  // public
  weatherupdateSubscription  = this.weatherUpdate.asObservable();
  errorFeedSubscription  = this.errorFeed.asObservable();

  // public functions
  startGetIssLocation() : void {
    if(this.isGetIsLocationStarted)
      return;

    interval(500)
    .subscribe(x => {
      this.pullIssLocation();
    });


    this.isGetIsLocationStarted = true;
  }

  pullIssLocation() : void {
    const url = "https://localhost:44318/api/IssPosition";
    //let url = `${Constants.issLocationApiBaseUrl}/api/IssPosition`;
    console.log(url);

    this.http.get<IssLocationModel>(url)
      .subscribe(data => {
        this.weatherUpdate.next(data);
      }, err => {
        this.errorFeed.next(err);
      });
  }

  getIssLocation() : Observable<IssLocationModel> {
      const url = "https://localhost:44318/api/IssPosition";
      return this.http.get<IssLocationModel>(url);
   }
}
