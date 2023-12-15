import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import{HttpClientModule } from '@angular/common/http';
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
import { PricePipe } from './price.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
// import { ServeComponent } from './serve/serve.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StructuraldirectivesComponent,
    MarksComponent,
    PipesComponent,
    EventComponent,
    CarsComponent,
    UsersComponent,
    VehiclesComponent,
    MemesComponent,
    EmailsComponent,
    FlipkartComponent,
    ProductsComponent,
    UserinfoComponent,
    AccountsComponent,
    CreateUserComponent,
    UserFormComponent,
    TestComponent,
    PricePipe,
    UserDetailsComponent,
    CreateAccountsComponent,
    AccountsDetailsComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    ParentComponent,
    ChildComponent,
    // ServeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
