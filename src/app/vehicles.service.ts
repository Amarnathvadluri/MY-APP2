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
  getSortedUser(column:string,order:string):Observable<any>{
    return this._vehicles.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);

  }
  deleteUser(id:string):Observable<any>{
    return this._vehicles.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }

  getPageUsers(pageno:number):Observable<any>{
    return this._vehicles.get(this.baseUrl+"?limit=10&page="+pageno);
  }


  createUser(data:any):Observable<any>{
    return this._vehicles.post(this.baseUrl+"/",data);
  }
}
