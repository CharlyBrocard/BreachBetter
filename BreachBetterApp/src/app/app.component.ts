import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
	prepareRoute(outlet: RouterOutlet): boolean {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
  
  constructor(){

    const firebaseConfig = {
      apiKey: "AIzaSyBThidx0_hIlvHuedbUhB55y32qy9nn6f8",
      authDomain: "breachbetter.firebaseapp.com",
      databaseURL: "https://breachbetter.firebaseio.com",
      projectId: "breachbetter",
      storageBucket: "breachbetter.appspot.com",
      messagingSenderId: "370507594461",
      appId: "1:370507594461:web:1fe66170d66262c53eb934"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
