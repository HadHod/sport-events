import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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
    return collectionData(
      collection(this.firestore, 'events').withConverter(
        converter<SportEvent>(),
      ),
      {
        idField: 'id',
      },
    );
  }
}
