import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store'
import {msgReducers} from '../app/store/msg.reducers'
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MessagingService } from './services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import {StoreDevtoolsModule}  from '@ngrx/store-devtools'
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BroadcastMessagesComponent } from './broadcast-messages/broadcast-messages.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent,
    BroadcastMessagesComponent 
  ],
  imports: [
    BrowserModule,CommonModule,StoreModule.forRoot({newmsg:msgReducers}),
    StoreDevtoolsModule.instrument({maxAge:25,
      logOnly:environment.production
    }),   BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule, FormsModule,
    AppRoutingModule,AngularFireMessagingModule,
    BrowserModule,AngularFireModule.initializeApp(environment.firebase),
    MatChipsModule,MatIconModule,MatCardModule,MatButtonModule,MatFormFieldModule,
    MatInputModule,HttpClientModule,
   // MatDialogModule,
    //MatSliderModule,
     //AngularFireAuthModule,
      AngularFireMessagingModule,
      AngularFirestoreModule,
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
