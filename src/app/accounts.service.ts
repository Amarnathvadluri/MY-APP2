import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  public baseUrl: string = "https://6128991386a213001729f9df.mockapi.io/test/v1/principals"
  constructor(private _httpClient: HttpClient) { }
  getAccounts(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  //get method to get the specifed account data from api

  getAccount(id: number): Observable<any> {
    return this._httpClient.get(this.baseUrl + "/" + id);
  }
  creatAccounts(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+ "/",data);
  }



  getFilteredAccounts(term: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=" + term);
  }
  getSortedAccounts(column: string, order: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy=" + column + "&order=" + order);
  }
  getPageAccounts(pageno: number): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=" + pageno);
  }

  deleteAccounts(id: string): Observable<any> {
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/" + id);
  }
  editAccounts(id: number, data: any): Observable<any> {
    return this._httpClient.put(this.baseUrl + "/" + id, data);
  }
}
