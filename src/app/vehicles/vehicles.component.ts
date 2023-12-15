import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

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
  public pageno: number = 0;
  // public id:string="";



  public vehicles: any = [];
  constructor(private _vehiclesservice: VehiclesService, private _router: Router) {

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
    this._vehiclesservice.getSortedvehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;

      },
      (err: any) => {
        alert("Internal server error");

      }
    )
  }
  delete(id: string) {
    this._vehiclesservice.deletevehicles(id).subscribe(
      (data: any) => {
        alert("deleted successfully deleted");
        location.reload();
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  page() {
    this._vehiclesservice.getPagevehicles(this.pageno).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }
  view(id: number) {
    this._router.navigateByUrl("/dashboard/vehicle-details-/" + id);
  }
  edit(id: number) {
    this._router.navigateByUrl("/dashboard/edit-vehicle/" + id);
  }

}
