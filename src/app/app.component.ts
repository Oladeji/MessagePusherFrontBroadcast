import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { MessagingService } from './services/messaging.service';
import { AppState } from './store/appstate';
import { msgtype } from './msgtype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  //themsg$: Observable<msgtype>;
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  //themsg$=this.store.pipe(select(state=>state.msg)) 

  
  constructor(private router:Router  ,  private messagingService : MessagingService){
    
 
}

  signOut(){} 

  ngOnInit() {
    this.messagingService.requestPermission()
   

 }
}