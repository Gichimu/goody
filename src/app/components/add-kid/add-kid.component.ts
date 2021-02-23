import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-kid',
  templateUrl: './add-kid.component.html',
  styleUrls: ['./add-kid.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class AddKidComponent implements OnInit {

  isLast: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  name: string;
  dob: Date;
  nokname: string;
  noknumber: number;
  kidphoto: string;

  constructor(
    private _formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required]
    });
    
    this.secondFormGroup = this._formBuilder.group({
      nokname: ['', Validators.required],
      noknumber: ['', Validators.required]
    });
  }

  upload(){
    console.log(this.name);
  }

}
