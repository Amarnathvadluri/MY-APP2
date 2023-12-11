import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public users: any = [];
  public term: string = "";
  public column: string = "";
  public order: string = "";
  public pageno:number=0;
  // public id:string="";



  public vehicles: any = [];
  constructor(private _vehiclesservice: VehiclesService) {

    _vehiclesservice.getvehicles().subscribe(
      (data: any) => {
        this.vehicles = data;

      },
      (err: any) => {
        alert("Internal service error");
      }
    )
  }

  getFilteredUsers() {
    this._vehiclesservice.getFilteredUsers(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  sort() {
    this._vehiclesservice.getSortedUser(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;

      },
      (err: any) => {
        alert("Internal server error");

      }
    )
  }
  delete(id:string) {
    this._vehiclesservice.deleteUser(id).subscribe(
      (data: any) => {
        alert("deleted successfully deleted");
        location.reload();
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  page(){
    this._vehiclesservice.getPageUsers(this.pageno).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}
