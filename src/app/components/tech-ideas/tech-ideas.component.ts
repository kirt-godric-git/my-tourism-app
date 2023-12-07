import { Component } from '@angular/core';
import { GetCityNamesService } from '../../services/get-city-names.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { prohibitedWords, validateWholeNumber } from '../../custom-validation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-ideas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tech-ideas.component.html',
  styleUrl: './tech-ideas.component.css'
})
export class TechIdeasComponent {
  cities: string[];
  techIdeasForm: FormGroup;

  constructor(private getCityNamesService: GetCityNamesService, private formBuilder: FormBuilder) {
    this.cities = getCityNamesService.getNames();

    this.techIdeasForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), prohibitedWords(/tourist/)]],
      age: ['', [validateWholeNumber]],
      email: ['', [Validators.required, Validators.email, prohibitedWords(/hacker/)]],
      city: ["", [Validators.required]],
      briefDesc : ["", [Validators.required, Validators.minLength(100), prohibitedWords(/nothing/)]]
    });
  }

  // ****** Getter method for your Forms Control *********
  // return Form Control of the 'name' field
  get nameFormControl() {
    return this.techIdeasForm.get('name')!;  // use this if you intend to use in your HTML {{ nameFormControl.touched }}   
    //return this.techIdeasForm.get('name');  // use this if you intend to use in your HTML {{ nameFormControl?.touched }}
  }

  // return Form Control of the 'age' field
  get ageFormControl() {
    return this.techIdeasForm.get('age')!;  // use this if you intend to use in your HTML {{ ageFormControl.xxxxx }}   
  }
  
  // return Form Control of the 'email' field
  get emailFormControl() {
    return this.techIdeasForm.get('email')!;  // use this if you intend to use in your HTML {{ emailFormControl.xxxxx }}   
  }

  // return Form Control of the 'city' field
  get cityFormControl() {
    return this.techIdeasForm.get('city')!;  // use this if you intend to use in your HTML {{ cityFormControl.xxxxx }}   
  }

  // return Form Control of the 'briefDesc' field
  get briefDescFormControl() {
    return this.techIdeasForm.get('briefDesc')!;  // use this if you intend to use in your HTML {{ briefDescFormControl.xxxxx }}   
  }

  onSubmit() {
    console.log("Name "+ this.techIdeasForm.controls['name'].value);
    console.log("Age "+ this.techIdeasForm.controls['age'].value);
    console.log("Email: "+ this.techIdeasForm.controls['email'].value);
    console.log("City: "+ this.techIdeasForm.controls['city'].value);
    console.log("Tech Idea: "+ this.techIdeasForm.controls['briefDesc'].value);
    this.techIdeasForm.reset();
  }
}
