import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() loggedOut = new EventEmitter<boolean>()

  isLoggedOut: boolean
  constructor() { }

  ngOnInit(): void {
  }

  logOut() {
    this.isLoggedOut = true
    this.loggedOut.emit(this.isLoggedOut);
  }
}
