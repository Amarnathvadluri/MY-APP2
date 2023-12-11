import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name1:string="abcdefg";
  public name2:string="abcdefg";
  public today:any=new Date();

  public product:any={
    name:'laptop',
    price:50000
  }
}
