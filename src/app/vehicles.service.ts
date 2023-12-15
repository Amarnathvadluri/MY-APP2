import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _vehicles:HttpClient) { }
  getvehicles():Observable<any>{
    return this._vehicles.get(this.baseUrl);
  }
  getFilteredUsers(term:string):Observable<any>{
    return this._vehicles.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }
  getSortedvehicles(column:string,order:string):Observable<any>{
    return this._vehicles.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);

  }
  deletevehicles(id:string):Observable<any>{
    return this._vehicles.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }

  getPagevehicles(pageno:number):Observable<any>{
    return this._vehicles.get(this.baseUrl+"?limit=10&page="+pageno);
  }
  getvehicle(id:number):Observable<any>{
    return this._vehicles.get(this.baseUrl+"/"+id);
  }

  createvehicles(data:any):Observable<any>{
    return this._vehicles.post(this.baseUrl+"/",data);
  }
  editVehicle(id: number, data: any): Observable<any> {
    return this._vehicles.put(this.baseUrl + "/" + id, data);
  }
}
