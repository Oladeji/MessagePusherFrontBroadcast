import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Defaultvalues } from '../Defaultvalues';

@Component({
  selector: 'app-broadcast-messages',
  templateUrl: './broadcast-messages.component.html',
  styleUrls: ['./broadcast-messages.component.css']
})
export class BroadcastMessagesComponent implements OnInit {
  frm_brodcastmsg: any;
  url:any;
  constructor(
    private messagingService: MessagingService,
    private fb: FormBuilder) {
    }


ngOnInit() {
     this.frm_brodcastmsg = this.fb.group({

      body: [''],
      TheTime: [''],
      title: ['MSGTITLE'],
      icon: [''],
      ThePatientId: ['AKOMSKEY'],
      HospitalId: ['XX-X1'],
  });

}
SendMessage()
{
  this.messagingService.PostJsonUpGetJsonDown(Defaultvalues.baseUrl,this.frm_brodcastmsg.value)
  .subscribe(x=>{});
}

}
