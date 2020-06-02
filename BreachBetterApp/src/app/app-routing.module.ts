import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent} from './app.component';
import { AppviewComponent } from './appview/appview.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: "login-component", component: LoginComponentComponent, data: { animationState:'Four' } },
  { path: "signup", component: SignupComponent, data: { animationState: 'Three' } },
  { path: "contact", component: ContactComponent, data: { animationState: 'Two' } },
  { path: '', component: AppviewComponent, data: { animationState: 'One' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
