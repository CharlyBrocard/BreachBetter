import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponent } from './signup/signup.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { AppComponent} from './app.component';
import { AppviewComponent } from './appview/appview.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuardService } from './services/auth-guard.service';
import { from } from 'rxjs';



const routes: Routes = [
  { path: "profil", component: ProfilComponent, data: { animationState: 'Six' } },
  { path: "tournoi", component: TournoiComponent, data: { animationState: 'Five' } },
  { path: "login-component", component: LoginComponentComponent, data: { animationState: 'Four' } },
  { path: "signup", component: SignupComponent, data: { animationState: 'Three' } },
  { path: "contact", component: ContactComponent, data: { animationState: 'Two' } },
  { path: '', component: AppviewComponent, data: { animationState: 'One' } },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
