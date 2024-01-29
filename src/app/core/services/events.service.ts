import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private firestore: Firestore) {
    firestore = inject(Firestore);
  }

  public getEvents(): Observable<unknown> {
    return collectionData(collection(this.firestore, 'test'), {
      idField: 'id',
    });
  }
}
