import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.css']
})
export class AccountsDetailsComponent {

  public account: any = {};
  constructor(private _activatedRoute: ActivatedRoute, private _accountService:AccountsService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          },
          (err:any)=>{
            alert("Internal server error");
          }
        )
      }
    )
  }
  
}
