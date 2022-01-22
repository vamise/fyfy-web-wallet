import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private dbPath = '/userInfo';

  userRef: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) { 
    this.userRef = this.firestore.collection(this.dbPath);
  }

  getAllRealTime() {
    return this.userRef.snapshotChanges().pipe(
      map(users => {
        return users.map(a => {
          let tmpUsers = {
            id: a.payload.doc.id, 
            data: a.payload.doc.data()
          }
          console.log("tmpUsers", tmpUsers);
          return tmpUsers;
        })
      })
    );
  }

  create(user: any): any {
    return this.userRef.add({ ...user});
  }

  update(id: string, data: any): Promise<void> {
    return this.userRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.userRef.doc(id).delete();
  }
}
