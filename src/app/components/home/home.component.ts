import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Kid } from 'src/app/kid';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/user';
import { AddKidComponent } from '../add-kid/add-kid.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  myControl = new FormControl();
  
  open = false;
  user: User;

  kids: Kid[] = [
    { name: 'Kelvin Muchiri', photoUrl: null, DOB: '10th Sept 2010' },
    { name: 'Agnes Mwikali', photoUrl: null, DOB: '12th December 2011' },
    { name: 'John Owino', photoUrl: null, DOB: '2nd July 2007' },
    { name: 'John Rufus', photoUrl: null, DOB: 'unknown'}
  ];

  contentMargin = 240;
  public sideNavState: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
    this.authService.getUsername();
    
  }

  openDialog(){
    this.dialog.open(AddKidComponent);
  }


  search(searchKey: string){
    console.log(searchKey);
  }

  sidenavToggle() {
    this.open = !this.open;
    this.open ? (this.contentMargin = 190) : (this.contentMargin = 70);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
