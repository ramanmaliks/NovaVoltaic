import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MessageComponent } from './component/message/message.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { UserGuard } from './service/user.guard';
const routes: Routes = [
  {
    path:"message",
    component:MessageComponent,
    pathMatch:"full",
    canActivate:[UserGuard]
  }
  ,
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  }
  ,
  {
    path:'login',
    component:LoginComponent,
    pathMatch:"full"
  }
  ,
  {
    path:'register',
    component:UserRegisterComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
