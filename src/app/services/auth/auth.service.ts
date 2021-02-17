import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential.user.displayName);
      })
      .catch(error => {
        console.log(error)
      })
  }

  async getUsername() {
    await this.afAuth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        this.user.username = userCredential.displayName;
        this.user.email = userCredential.email;
      }else{
        this.user.username = null
        this.user.email = null
      }
    });
  }

  async create(email: string, username: string, password: string) {
    await this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          userCredential.user.updateProfile({
            displayName: username,
          });
        }
      });
  }

  logout() {
    this.afAuth.signOut();
  }
}
