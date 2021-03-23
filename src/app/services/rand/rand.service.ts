import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class RandService {
  randUser = {} as User

  randUrl: string = "https://randomuser.me/api"
  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    this.http.get(this.randUrl).subscribe(
      (users: any) => { 
        this.randUser.firstName = users.results[0].name.first
        this.randUser.lastName = users.results[0].name.last
        this.randUser.email = users.results[0].email
        this.randUser.large = users.results[0].picture.large
        this.randUser.medium = users.results[0].picture.medium
        this.randUser.thumbnail = users.results[0].picture.thumbnail
      }
    );
  }
  
}
