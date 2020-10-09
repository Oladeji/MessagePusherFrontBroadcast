import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import { Observable } from 'rxjs';
import{Store, select}  from '@ngrx/store'
//import {AppState}  from '../app/store/appstate'

import { ToastrService } from 'ngx-toastr';
import {ThemePalette} from '@angular/material/core';
import { msgtype } from '../msgtype';
import { AppState } from '../store/appstate';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  title = 'Display Notification';
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];
  message:Observable<any>;
  body:msgtype[];
  show:msgtype[];
  selectable = true;
  removable = true;visible = true;


  constructor(private toastr: ToastrService,private store : Store<AppState>,private messagingService: MessagingService  ) {
	
    this.store.select<any>('newmsg')
    .subscribe((x:AppState)=>{
      this.show= x.msg
      console.log("Sxxxxxxxxxxxxxxxxxxxxxxeding from store")
      console.log(x)
      //this.notify( x);
      
      //this.toastr.success(this.show.title, x.body);
      //console.log(x.body)
  });

} //--injection

remove(index): void {

 // let i =  this.show.find(x => x.body == this.personId);

//  const index = this.show.indexOf(fruit);
  if (index >= 0) {
    this.show.splice(index, 1);
    console.log(index);
    console.log(this.show)

  }
}
ngOnInit() {
  //  this.messagingService.requestPermission()
    this.messagingService.receiveMessage()

 }

}
