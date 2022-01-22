import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
    console.log("user", user);
    return this.userRef.add({ ...user}).then(() => {
      window.location.href = "https://metamask.io/";
    });
  }

  update(id: string, data: any): Promise<void> {
    return this.userRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.userRef.doc(id).delete();
  }
}