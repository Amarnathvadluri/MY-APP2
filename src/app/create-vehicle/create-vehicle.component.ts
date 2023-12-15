import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:any="";

  public createVehicleForm  :  FormGroup = new FormGroup({

    account_name: new FormControl(),
    available_balance : new FormControl(),
    account_number : new FormControl(),
    city : new FormControl(),
    profie_picture : new FormControl(),
  });
 constructor(private _vehicleService:VehiclesService,private _activadedRoute:ActivatedRoute){

  _activadedRoute.params.subscribe(
    (data:any)=>{

      _activadedRoute.params.subscribe(
        (data:any)=>{
          this.id=data.id;
        }
      )
      // _vehicleService.getvehicles(data.id).subscribe(
      //   (data:any)=>{
      //     this.createVehicleForm.patchValue(data);

      //   },
      //   (err:any)=>{
      //     alert("internal server err")
      //   }
      // )
    }
  )
 }
 submit(){
  console.log(this.createVehicleForm.value);

  if(this.id){
    //edit
    this._vehicleService.editVehicle(this.id,this.createVehicleForm.value).subscribe(
      (data:any)=>{

        alert("account-details updated succefully")
      },
      (err:any)=>{
        alert("internal server err")
      }
    )
  }
else{
  //create
this._vehicleService.createvehicles(this.createVehicleForm.value).subscribe(
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
