import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() loggedOut = new EventEmitter<boolean>()

  isLoggedOut: boolean
  user: User;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.user = this.authservice.user
  }

  logOut() {
    this.isLoggedOut = true
    this.loggedOut.emit(this.isLoggedOut);
  }
}
