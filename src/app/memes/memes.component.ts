import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {
  public memes:any=[];
  constructor(private _memesservice:MemesService){
    _memesservice.getvehicles().subscribe(
      (memesdata:any)=>{
        this.memes=memesdata.data.memes;
      },
      (err:any)=>{
        alert("Internal service error")
      }
    )
  }

}
