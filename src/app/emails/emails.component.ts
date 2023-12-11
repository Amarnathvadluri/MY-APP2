import { Component } from '@angular/core';
import { EmailsService } from '../emails.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent {
  public emails:any=[];
  constructor(private emailservices:EmailsService){
    emailservices.getemails().subscribe(
      (emailsdata:any)=>{
        this.emails=emailsdata;
      },
      (err:any)=>{
        alert("Internal service error")
      }
    )
  }


}
