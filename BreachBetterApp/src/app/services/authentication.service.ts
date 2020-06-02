import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { resolve } from 'url';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signUpUser(email: string, password: string){
    return new Promise (
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            console.log('Connecté');
            resolve();
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

}
