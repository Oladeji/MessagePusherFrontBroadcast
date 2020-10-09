import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { BroadcastMessagesComponent } from './broadcast-messages/broadcast-messages.component';

const routes: Routes =  [{ path: 'SignIn', component: LoginComponent },

 { path: 'Display', component: DisplayComponent },
 { path: 'Broadcast', component: BroadcastMessagesComponent },
// { path: 'Landing', component: LandingpageComponent },
/*   { path: 'grid', component: TrygridComponent },   
  {
    path: 'CourseReg',
    loadChildren: () => import('./../app/courseregpage/courseregmod.module').then(m => m.CourseregmodModule),
      canActivate: [AuthGuardService]
  }
  ,   
  {
    path: 'CheckResult',
    loadChildren: () => import('./../app/resultpage/resultpagemod.module').then(m => m.ResultpagemodModule),
     canActivate: [AuthGuardService]
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
