import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Kid } from 'src/app/kid';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/user';
import { AddKidComponent } from '../add-kid/add-kid.component';
import { LandingComponent } from '../landing/landing.component';
import { ProfileComponent } from '../profile/profile.component';
import { RandService } from 'src/app/services/rand/rand.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  navigatedRoute = LandingComponent
  public dynamicComps = [
    {name: 'landing', component: LandingComponent},
    {name: 'profile', component: ProfileComponent}
  ]
  myControl = new FormControl();
  
  open = false;
  user: User;

  

  contentMargin = 240;
  public sideNavState: boolean = false;

  constructor(
    private authService: AuthService, 
    private randservice: RandService,
    private router: Router,
    private active: ActivatedRoute,
    private dialog: MatDialog
    ) {}
    rands: string[] = []
  ngOnInit(): void {
    this.user = this.authService.user;
    this.authService.getUsername();

    this.randservice.getUsers().subscribe(
      (users: any) => this.rands = users
    )

    console.log(this.rands)
  }

  openDialog(){
    this.dialog.open(AddKidComponent);
  }

  getRoute(myRoute: string) {
    if(myRoute == 'landing'){
      this.navigatedRoute = LandingComponent
    }else if(myRoute == 'profile'){
      this.navigatedRoute = ProfileComponent
    }
  }


  search(searchKey: string){
    console.log(searchKey);
  }

  sidenavToggle() {
    this.open = !this.open;
    this.open ? (this.contentMargin = 190) : (this.contentMargin = 70);
  }

}
