import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandService {

  randUrl: string = "https://randomuser.me/api/?results=4"
  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get(this.randUrl)
  }
}
