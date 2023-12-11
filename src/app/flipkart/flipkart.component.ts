import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public flipkartitems:any=[];

  constructor(private _flipkartservice:FlipkartService){
    _flipkartservice.getflipkart().subscribe(
      (flipkartdata:any)=>{
        this.flipkartitems=flipkartdata;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

}
