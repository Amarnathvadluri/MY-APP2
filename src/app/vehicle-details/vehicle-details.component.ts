import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  public vehicle: any = {};
  constructor(private _activatedRoute: ActivatedRoute, private _vechicleService:VehiclesService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _vechicleService.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          },
          (err:any)=>{
            alert("Internal server error");
          }
        )
      }
    )
  }
}
