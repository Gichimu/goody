import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms'; 
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
} 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email: string;
  password: string;
  error: string
  matcher = new MyErrorStateMatcher();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void{
    this.authService.login(this.email, this.password)
    .then(res => {
      this.router.navigate(['home']);
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  createUser(): void {
    this.authService.create(this.email, this.password).then(
      res => {
        console.log(res)
      }
    )
    .catch(error => {
      this.error = error.message
    })
  }

  logout(): void {
    this.authService.logout()
  }
}
