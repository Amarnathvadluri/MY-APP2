import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public id:any="";

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    image: new FormControl()
  })

  constructor(private _userService:UserService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _activatedRoute.params.subscribe(
          (data:any)=>{
            this.id=data.id;
          }
        )
        _userService.getUser(data.id).subscribe(
          (data:any)=>{

            this.userForm.patchValue(data);
          },
          (err:any)=>{
            alert("internal server err")
          }
        )

      }
    )
  }

  submit(){
    console.log(this.userForm.value);

    if(this.id){
      //edit
      this._userService.editUser(this.id,this.userForm.value).subscribe(
        (data:any)=>{

          alert("user updated succefully")
        },
        (err:any)=>{
          alert("internal server err")
        }
      )
    }
  else{
    //create
  this._userService.createUser(this.userForm.value).subscribe(
    (data:any)=>{
      alert("User created succefully");

    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
  }


  }
}
