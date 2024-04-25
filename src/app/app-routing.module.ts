import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './btwarden/personal/personal.component';
import { LoginComponent } from './login&signup/login/login.component';
import { SignupComponent } from './login&signup/signup/signup.component';
import { HomeComponent } from './btwarden/home/home.component';
import { CreateaccpageComponent } from './login&signup/createaccpage/createaccpage.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"personal",component:PersonalComponent},
  {path:"login",component:LoginComponent},
  {path:"signup" , component:SignupComponent},
  {path:"createaccount",component:CreateaccpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
