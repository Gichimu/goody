import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opened: boolean;
  @Output() e = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(): void{
    this.opened = !this.opened;
    this.e.emit(this.opened);
  }

}
