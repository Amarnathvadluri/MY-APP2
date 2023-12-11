import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _flipkartclient:HttpClient) { }
  getflipkart():Observable<any>{
    return this._flipkartclient.get("https://fakestoreapi.com/products")
  }
}
