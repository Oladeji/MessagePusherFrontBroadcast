import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../store/appstate';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  startspinner = false;
  notificationType = 'success'; // success, info, warning
  notificationMessage = 'login was successful';
  flashnotification = false;
  frm_login: any;
  error: any;
  theform: any;
  data:AppState;
   constructor(
      private store : Store<AppState>,private messagingService: MessagingService,
      private router: Router, private fb: FormBuilder) {
      }


  ngOnInit() {
       this.frm_login = this.fb.group({

        UserKey: ['', [Validators.required as any]],
        Password: ['', [Validators.required as any]]
    });

  }

SignIn()
{
  console.log("SIGNED IN CALLED")
 // this.startspinner = true;
 // this.store.dispatch(new AllActions.LogInForm_PreAction({url: this.env.baseUrl  + Defaultvalues.loginurl, usernamepass: this.frm_login.value}) );
 this.store.select<any>('newmsg')
 .subscribe((x:AppState)=>{
   this.data= x;
   console.log("Got data from store")
   console.log(x)
  if (x.hastoken)
  {   console.log("Got login parameter")
  console.log(this.frm_login.value.UserKey)
  console.log(this.frm_login.value.Password)
  console.log(this.frm_login.value)
      this.messagingService.addPatient({'PatiendId':this.frm_login.value.UserKey,Hospitalid:this.frm_login.value.Password,token:x.token})
      this.router.navigate(['Display']);
  }
  else
   {
   console.log("Bothing in the token value")
   }
  
});

 
}
 
}