import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  public students:any=[
    {name:'Anu',marks:100,grade:'a'},
    {name:'AMAR',marks:80,grade:'b'},
    {name:'VENU',marks:70,grade:'c'},
    {name:'KUMAR',marks:30,grade:'fail'}
]

}
