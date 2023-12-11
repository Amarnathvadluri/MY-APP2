import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
public account:any=[];
public term:string="";
public column:string="";
public order:string="";
public pageno:number=0;




constructor(private _accountService:AccountsService){
  _accountService.getAccounts().subscribe(
    (data:any)=>{
      this.account=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}
getFilteredAccounts(){

  
  this._accountService.getFilteredAccounts(this.term).subscribe(
    (data:any)=>{
      this.account=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
    
  )

}
sort(){
  this._accountService.getSortedAccounts(this.column,this.order).subscribe(
    (data:any)=>{
      this.account=data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
delete(id:string){
  this._accountService.deleteAccounts(id).subscribe(
    (data:any)=>{
      alert("deleted successfully");
      location.reload();
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}

page(){
  this._accountService.getPageAccounts(this.pageno).subscribe(
    (data:any)=>{
      this.account=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

}

