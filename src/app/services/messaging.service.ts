
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Store}  from '@ngrx/store'
import { AppState } from '../store/appstate';
import { AddMessageOnly, AddToken } from '../store/msg.actions';
import { msgtype } from '../msgtype';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Json_Up_Down } from '../HttpOptions';
import { CommonFunctions } from '../CommonFunctions';
@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  t:msgtype;
  constructor(private _http: HttpClient, private firestore: AngularFirestore, private store : Store<AppState>,private angularFireMessaging: AngularFireMessaging)
  {

    this.angularFireMessaging.messages.subscribe(
      (_messaging:AngularFireMessaging) => {
          _messaging.onMessage = _messaging.onMessage.bind(_messaging);
          _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    );


  }

requestPermission() {
  this.angularFireMessaging.requestToken.subscribe(
  (token) => {
    console.log(token);
    console.log('Permission granted!');
    this.store.dispatch(AddToken({thetoken:token}))
    console.log('Token Logged');
  },
  (err) => {
  console.error('Unable to get permission to notify.', err);
  alert('Unable to get permission to notify')
  }
  );
}

addPatient( Patient)
{
    console.log("Patient B$ sending to Firebase :",Patient)
      return new Promise <any> ((resolve,reject)=>{
      this.firestore.collection('Patients')
      .add(Patient)
      .then( res=>{
        console.log("Patient Added :",Patient)
      },err=>reject(err));
    });
}
PostJsonUpGetJsonDown(destinationurl: string, logindata: any) {
  console.log(destinationurl);
  console.log(logindata);
  const dt =JSON.stringify(logindata)
  console.log(dt)
  return this._http
  .post(destinationurl, logindata, Json_Up_Down)
  //.get(destinationurl)
  .pipe(
    catchError(error => new CommonFunctions().handleError(error))
  );
}
receiveMessage() {
    console.log('receiveMessage called first');
    this.angularFireMessaging.messages.subscribe(
   (payload:any) => {
    console.log('new message received. ', payload.notification);
    var msg=<msgtype>{};
    msg.body= payload.notification.body;
    msg.icon=payload.notification.icon;
    msg.title= payload.notification.title;
    console.log('new message received. ', payload);
    console.log('new message received. ==>', msg);
    //this.Addtostore(payload.notification)
    
   // this.store.dispatch(addmsg(payload.notification))
    this.store.dispatch(AddMessageOnly({msg:msg}))
    
   // this.currentMessage.next(payload);
  
   this.currentMessage.next(payload.notification);
  
});
}


}