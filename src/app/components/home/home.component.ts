import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Kid } from 'src/app/kid';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/user';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('sidenav') sidenav: MatSidenav;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  open = false;
  user: User;
  kids: Kid[] = [
    { name: 'Kelvin Muchiri', photoUrl: null, DOB: '10th Sept 2010' },
    { name: 'Agnes Mwikali', photoUrl: null, DOB: '12th December 2011' },
    { name: 'John Owino', photoUrl: null, DOB: '2nd July 2007' },
    { name: 'John Rufus', photoUrl: null, DOB: 'unknown'}
  ];
  options: string[] = [];
  contentMargin = 240;
  public sideNavState: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authService.user;
    this.authService.getUsername();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    
  }

  private _filter(value: string): string[] {
    this.kids.forEach(kid => {
      this.options.push(kid.name)
    })
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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
