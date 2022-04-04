import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  listofCountry = ['india', 'usa'];
  registrationModel = {
    firstName: 'swapna',
    lastName: 'Kochrekar',
    gender: 'Female',

    country: 'india',
  };
  constructor() {}

  ngOnInit(): void {}
}
