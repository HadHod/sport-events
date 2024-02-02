import {
  DocumentData,
  GeoPoint,
  QueryDocumentSnapshot,
  Timestamp,
} from '@angular/fire/firestore';

export interface SportEvent extends DocumentData {
  readonly id: string;
  name: string;
  description: string;
  image: string; // logo, poster
  location: GeoPoint;
  tags: string[];
  startTime: Timestamp;
  endTime: Timestamp;
}

/* https://stackoverflow.com/questions/57264167/how-can-i-convert-the-data-from-a-documentsnapshot-to-a-custom-type-using-google */
export function converter<T extends DocumentData>() {
  return {
    /**
     * Converts data of type T to Firestore format.
     */
    toFirestore(data: T): DocumentData {
      return data;
    },

    /**
     * Converts Firestore snapshot data to the specified data type T.
     */
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): T {
      return snapshot.data() as T;
    },
  };
}
