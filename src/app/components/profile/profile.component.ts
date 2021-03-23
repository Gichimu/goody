import { Component, OnInit } from '@angular/core';
import { Kid } from 'src/app/kid';
import { RandService } from 'src/app/services/rand/rand.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  kids: Kid[] = []
  randUser: User = {} as User
  constructor(private randservice: RandService) { }

  ngOnInit(): void {
    this.randUser = this.randservice.randUser
    console.log(this.randUser)
  }

}
