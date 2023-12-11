import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public userForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    class:new FormControl(null,[Validators.required,Validators.min(1),Validators.max(2)]),
    fathername:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    dob:new FormControl(null,[Validators.required]),
    address:new FormGroup({
      addressLine:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      pincode:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)])
  }),
    marks: new FormArray([]),
    type: new FormControl(null,[Validators.required]),
    busFee: new FormControl(null,[Validators.required]),
    hostelFee: new FormControl(null,[Validators.required])
  })

  get marksFormArray() {
    return this.userForm.get('marks') as FormArray;
  }

  add() {
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new  FormControl(null,[Validators.required]),
      })
    )
  }

  delete(i: number) {
    this.marksFormArray.removeAt(i);
  }

  submit() {
    console.log(this.userForm);

  }

 
}

