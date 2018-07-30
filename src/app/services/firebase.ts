import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ILocation } from '../interfaces/location';
 
@Injectable()
export class firebaseService {
    public recycle: Observable<ILocation[]>;
    public trash:Observable<ILocation[]>;

    constructor(private _database:AngularFireDatabase) {}

    public loadRecyleLocations(){
       return this._database.list<ILocation>('/recycle_locations').valueChanges()
    }

    public loadTrashPlaces(){
       return this._database.list<ILocation>('/trash_locations').valueChanges();
    }
 
}