import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  open = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  sidenavOpen(){
    console.log("opened", this.open);
    this.open = !this.open;
  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['login']);
  }

}
