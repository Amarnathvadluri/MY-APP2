import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    model: new FormControl(),
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    fuel: new FormControl(),
    color:new FormControl()
  })

  constructor(private _vehiclesservice:VehiclesService){}

  submit(){
    console.log(this.userForm);
  
  this._vehiclesservice.createUser(this.userForm.value).subscribe(
    (data:any)=>{
      alert("User created succefully");

    },
    (err:any)=>{
      alert("INternal server error")
    }
  )
  }


  }
