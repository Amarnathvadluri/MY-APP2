import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users : any =[];
  public term:string="";
  public column:string="";
  public order:string="";
  public pageno:number=0;
  



  constructor(private _userservice:UserService, private _router:Router){
  }
  getFilteredUsers(){
    this._userservice.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
      
    )

  }
  sort(){
    this._userservice.getSortedUsers(this.column,this.order).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  page(){
    this._userservice.getPageUsers(this.pageno).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

    delete(id:string){
      this._userservice.deleteUser(id).subscribe(
        (data:any)=>{
          alert("deleted successfully");
          location.reload();
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
    view(id:number){
      this._router.navigateByUrl("/dashboard/user-details/"+id);

    }
    edit(id:number){
      this._router.navigateByUrl("/dashboard/edit-user/"+id);

    }
  

}
