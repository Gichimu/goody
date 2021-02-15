import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
  }

  async create(email: string, password: string){
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    
  }

  logout() {
    this.afAuth.signOut();
  }
}
