import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public text:string='';
  public names:string[]=[];

  submit(){
    this.names.push(this.text)
  }
  delete(){
    this.names.pop()

  }
  
  

}
