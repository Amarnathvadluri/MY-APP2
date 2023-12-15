import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student";

  constructor( private _httpClient:HttpClient) { }
  getuser():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }
  getFilteredUsers(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }
  getSortedUsers(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  getPageUsers(pageno:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+pageno);
  }

  deleteUser(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }


  createUser(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+"/",data);
  }

  getUser(id:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }
  editUser(id:any,data:any):Observable<any>{
    return this._httpClient.put (this.baseUrl+"/"+id,data);
  }
  
}
