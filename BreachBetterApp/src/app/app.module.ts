import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AppviewComponent } from './appview/appview.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { TournoiComponent } from './tournoi/tournoi.component';
import { ProfilComponent } from './profil/profil.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    HomepageComponentComponent,
    LoginComponentComponent,
    AppviewComponent,
    ContactComponent,
    SignupComponent,
    FooterComponent,
    TournoiComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
