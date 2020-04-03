import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {MobileComponent} from '../mobile/mobile.component';
import {FruitComponent} from '../fruit/fruit.component';
import { APP_BASE_HREF } from '@angular/common';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'fruit', component: FruitComponent },
  {path : '', component : LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent =[LoginComponent,HomeComponent,MobileComponent,FruitComponent]

