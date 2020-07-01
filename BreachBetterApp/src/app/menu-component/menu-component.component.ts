import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService} from '../services/authentication.service';
import { from } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {



  isAuth: boolean;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user){
          this.isAuth = true;
        } else{
          this.isAuth = false;
        }
      }
    );

  }

  onSignOut(){
    this.authenticationService.signOutUser();
  }
}