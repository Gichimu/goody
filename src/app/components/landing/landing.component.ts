import { Component, OnInit } from '@angular/core';
import { Kid } from 'src/app/kid';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  kids: Kid[] = [
    { name: 'Kelvin Muchiri', photoUrl: null, DOB: '10th Sept 2010' },
    { name: 'Agnes Mwikali', photoUrl: null, DOB: '12th December 2011' },
    { name: 'John Owino', photoUrl: null, DOB: '2nd July 2007' },
    { name: 'John Rufus', photoUrl: null, DOB: 'unknown'}
  ];

  ngOnInit(): void {
  }

}
