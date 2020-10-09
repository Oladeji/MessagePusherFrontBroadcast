import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private firestore: AngularFirestore) { }
  
  addPatient( Patient)
  {
    return new Promise <any> ((resolve,reject)=>{
    this.firestore.collection('Patients')
    .add(Patient)
    .then( res=>{},err=>reject(err));
  });
}

}
