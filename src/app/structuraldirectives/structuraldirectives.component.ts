import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent {

  public names: string[]=['anudeep','amar','venu','naveen']

  public states : string[]= ['telangana','andhrapradesh','kerala']

  public products:any=[
    {name:'pen',price:30},
    {name:'pencile',price:10},
    {name:'book',price:40},
  ]
  public num:number=0;


}
