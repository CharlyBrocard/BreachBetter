import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SigninComponent } from './signin/signin.component';
import { AppviewComponent } from './appview/appview.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    HomepageComponentComponent,
    LoginComponentComponent,
    SigninComponent,
    AppviewComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
