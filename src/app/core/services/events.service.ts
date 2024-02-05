import {
  Firestore,
  collection,
  collectionData,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { SportEvent, converter } from '../../shared/models/sport-event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private firestore: Firestore) {
    firestore = inject(Firestore);
  }

  public getEvents(): Observable<SportEvent[]> {
    const collectionRef = collection(this.firestore, 'events').withConverter(
      converter<SportEvent>(),
    );

    const orderByEndTime = orderBy('endTime');
    const filterOutFinished = where('endTime', '>', new Date(2000, 0, 29)); // TODO filter out ended week ago
    const orderByStartTime = orderBy('startTime', 'asc');

    return collectionData(
      query(collectionRef, orderByEndTime, filterOutFinished, orderByStartTime),
      {
        idField: 'id',
      },
    );
  }
}
