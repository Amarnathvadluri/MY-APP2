import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public name:string= '';
  public price: number=0;
  public rating:number= 0;
  public delivery:string='';
  // search sorting  variable creation
  public search:string='';

//for total price value 
public totalprice: number=0;

public totalitems:number=0;

 public products: any=[
  {
    name: 'laptop', price: 50000, rating: 4.5, freeDel: 'yes'
  },
  {
    name: 'pen', price: 50, rating: 4.5, freeDel: 'no'
  },
  {
    name: 'laptop2', price: 55000, rating: 4.5, freeDel: 'yes'
  }
 ]
 delete(i:number){
  this.products.splice(i,1)
 }

 addtocart(){
  this.products.push({
    name:this.name, price:this.price, rating:this.rating,freeDel:this.delivery
  })
 }
 //Function for searching the products 
 searchproducts(){
   var result=this.products.filter((product:any)=>product.name.includes(this.search))
   this.products=result
 }
 onlyfreedelivery(){
   var result2 = this.products.filter((product:any) => product.freeDel === 'yes')
   this.products = result2
 }
 pricelowtohigh(){
  var pricelowtohigh = this.products.sort((a:any, b:any) =>a.price - b.price)
  this.products= pricelowtohigh
 }
 pricehightolow(){
  var pricehightolow = this.products.sort((a:any, b:any) =>b.price - a.price)
  this.products= pricehightolow
 }

 Ratinghightolow(){
   var ratinghightolow = this.products.sort((a:any,b:any)=>b.rating - a.rating)
   this.products =  ratinghightolow
 }

 Ratinglowtohigh(){
  var ratinglowtohigh = this.products.sort((a:any,b:any)=>a.rating - b.rating)
   this.products = ratinglowtohigh  
 }

 ApplyDiscount(){
  var ApplyDiscount = this.products.map((product:any)=>{
    product.price= product.price/2;
    return product;
  })
 }

 ApplyDeliveryCharges(){
  var ApplyDiscount = this.products.map((product:any)=>{
    product.price= product.price+70;
    return product;
 })
  }

  TotalPrice(){
    var total= this.products.reduce((sum:any,product:any) => sum+product.price,0)
    this.totalprice= total;
    
  }
  Totalitems(){
    this.totalitems = this.products.length
    
  }


}


