import { Component, OnInit } from '@angular/core';
import { Kid } from 'src/app/kid';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  kids: Kid[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
