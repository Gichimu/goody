import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit(): void {
  }

  sidenavOpen(){
    console.log("opened", this.open);
    this.open = !this.open;
  }

}
