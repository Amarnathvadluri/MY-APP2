import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {

  public id: any = "";

  public createAccountsForm: FormGroup = new FormGroup({

    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
  });
  constructor(private _accountService: AccountsService, private _activadedRoute: ActivatedRoute) {

    _activadedRoute.params.subscribe(
      (data: any) => {

        _activadedRoute.params.subscribe(
          (data: any) => {
            this.id = data.id;
          }
        )
        _accountService.getAccount(data.id).subscribe(
          (data: any) => {
            this.createAccountsForm.patchValue(data);

          },
          (err: any) => {
            alert("internal server err")
          }
        )
      }
    )
  }
  submit() {
    console.log(this.createAccountsForm.value);

    if (this.id) {
      //edit
      this._accountService.editAccounts(this.id, this.createAccountsForm.value).subscribe(
        (data: any) => {

          alert("account-details updated succefully")
        },
        (err: any) => {
          alert("internal server err")
        }
      )
    }
    else {
      //create
      this._accountService.creatAccounts(this.createAccountsForm.value).subscribe(
        (data: any) => {
          alert("User created succefully");

        },
        (err: any) => {
          alert("Internal server error")
        }
      )
    }


  }

} 
