import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ILocation } from '../interfaces/location';
import { IReport } from '../interfaces/report';
 
@Injectable()
export class firebaseService {
    public recycle: Observable<ILocation[]>;
    public trash:Observable<ILocation[]>;

    constructor(private _database:AngularFireDatabase) {}

    public loadRecyleLocations(){
       return this._database.list<ILocation>('/recycle_locations').valueChanges();
    }

    public loadTrashPlaces(){
       return this._database.list<ILocation>('/trash_locations').valueChanges();
    }

    public loadReports(){
        return this._database.list<IReport>('/reports').valueChanges();
    }

    public addReport(report){
        return this._database.list<IReport>('/reports').push(report);
    }
 
}