import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  open = false;
  user: User;
  contentMargin = 240
  public sideNavState: boolean = false;
  constructor(
    private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.authService.getUsername();
  }

  sidenavToggle(){
    this.open = !this.open
    this.open? this.contentMargin = 190 : this.contentMargin = 70
  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['login']);
  }

}
