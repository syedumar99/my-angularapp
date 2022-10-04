import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {
  form : any;
  fname! : string;
  lname! : string;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname : new FormControl("",Validators.compose([Validators.required, Validators.minLength(3)])),
      lastname : new FormControl("Jay")
    })
  }
  showValue(user : any){
    this.fname = user.firstname;
    this.lname = user.lastname;
    console.log(user);
  }
}
