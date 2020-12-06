import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('@kek.let', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([
        new FormControl('Русский язык', Validators.required),
      ]),
    });
  }

  submit() {
    if ( this.form.valid ) {
      console.log(`form submitted `, this.form);
      const formData = {...this.form.value};
      this.resetForm();

      console.log('formData', formData);
    }
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };
    const cityKey: string = this.form.get('address').get('country').value;

    this.form.patchValue({
      address: {city: cityMap[cityKey]}
    });
    // this.form.get('address').patchValue({
    //   city: cityMap[cityKey]
    // });
  }

  addSkill() {
    const control: FormControl = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control);
    (this.form.get('skills') as FormArray).push(control);
  }

  removeSkill(idx) {
    (this.form.get('skills') as FormArray).removeAt(idx);
  }

  resetForm() {
    this.form.reset();
  }
}
