import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MemesComponent } from './memes/memes.component';
import { EmailsComponent } from './emails/emails.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { ProductsComponent } from './products/products.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TestComponent } from './test/test.component';
import { AuthenticationGuard } from './authentication.guard';
import { NotifyGuard } from './notify.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'structureldirectives', component: StructuraldirectivesComponent },
  {
    path: 'dashboard', canActivate: [AuthenticationGuard], component: DashboardComponent, children: [
      { path: 'marks', component: MarksComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'event', component: EventComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'structureldirectives', component: StructuraldirectivesComponent },
      { path: 'create-user', canDeactivate: [NotifyGuard], component: CreateUserComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user-form', canDeactivate: [NotifyGuard], component: UserFormComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'memes', component: MemesComponent },
      { path: 'emails', component: EmailsComponent },
      { path: 'flipkart', component: FlipkartComponent },
      { path: 'userinfo', component: UserinfoComponent },
      { path: 'test', component: TestComponent },
      { path: 'user-details/:id', component: UserDetailsComponent },
      { path: 'edit-user/:id', component: CreateUserComponent },
      { path: 'create-accounts', component: CreateAccountsComponent },
      { path: 'accounts-details/:id', component: AccountsDetailsComponent },
      { path: 'edit-accounts-details/:id', component: CreateAccountsComponent },
      { path: 'create-vehicle', component: CreateVehicleComponent },
      { path: 'vehicle-details/:id', component: VehicleDetailsComponent },
      { path: 'edit-vehicle-details/:id', component: CreateVehicleComponent },
      {path:'parent',component:ParentComponent}


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
