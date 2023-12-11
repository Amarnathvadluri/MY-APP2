import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private _userinfo:HttpClient) { }
  getuserinfo():Observable<any>{
    return this._userinfo.get("https://dummyjson.com/users")
    
  }
}
