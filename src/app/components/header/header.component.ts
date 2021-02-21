import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() loggedOut = new EventEmitter<boolean>()
  @Output() searchItem = new EventEmitter<string>();
  myControl = new FormControl();
  isLoggedOut: boolean
  user: User;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.user = this.authservice.user

  }

  search(){
    this.searchItem.emit(this.myControl.value);
  }

  logOut() {
    this.isLoggedOut = true
    this.loggedOut.emit(this.isLoggedOut);
  }
}
