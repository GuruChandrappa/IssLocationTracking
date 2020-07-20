import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IssLocationModel} from '../../models/issLocation-model';
import { IssLocationService } from '../../service/issLocation.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css']
})
export class IssComponent implements OnInit {

  constructor(private issLocationSvc : IssLocationService) { }

  issLocation : IssLocationModel = null;
  locationFeed : BehaviorSubject<IssLocationModel> = new BehaviorSubject<IssLocationModel>(null);
  issLocation$ : Observable<IssLocationModel> = this.locationFeed.asObservable();

  messages : string[] = [];

  ngOnInit(): void {

    this.issLocationSvc.errorFeedSubscription.subscribe(this.onNextError);

    this.issLocationSvc.weatherupdateSubscription
    .subscribe(next => {
      this.updateLocation(next);
    });

    this.issLocationSvc.startGetIssLocation();
    //this.loadIssLocation();
  }

  private onNextError(err : any) : void {
    if(!err)
      return;

    if(!this.messages)
      return;

    this.messages.length = 0;
    this.messages.push(err?.message);
  }

  private updateLocation(nextUpdate : IssLocationModel) : void {
    if(nextUpdate === null)
      return;

    let newLocation = nextUpdate;
    newLocation.lastUpdated = new Date();

    this.locationFeed.next(newLocation);
  }

  private loadIssLocation() : void {
    this.issLocationSvc.getIssLocation()
    .subscribe(data =>{
      this.issLocation = data;

    }, err => {
      this.messages.length = 0;
      this.messages.push(err);
    });
  }

}
