import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { HomeComponent } from './btwarden/home/home.component';
import { NavbarComponent } from './btwarden/navbar/navbar.component';
import { PersonalComponent } from './btwarden/personal/personal.component';
import { LoginComponent } from './login&signup/login/login.component';
import { SignupComponent } from './login&signup/signup/signup.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CreateaccpageComponent } from './login&signup/createaccpage/createaccpage.component';

@NgModule({
  declarations: [
    AppComponent,
    InputboxComponent,
    HomeComponent,
    NavbarComponent,
    PersonalComponent,
    LoginComponent,
    SignupComponent,
    CreateaccpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
