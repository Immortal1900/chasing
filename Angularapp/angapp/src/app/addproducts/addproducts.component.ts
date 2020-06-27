import { ProductService } from './../shared/products/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
  providers: [ProductService]

})
export class AddproductsComponent implements OnInit {
  productname;
  price;
  category;
  productservice;
  mm(){
    console.log(this.productname,this.price,this.category);
  }
  constructor(pr: ProductService) {
    this.productservice=pr;
    console.log(pr);
   }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form? :NgForm){
    console.log("RESET CAELEELD");
    if(form)
    form.reset();
    this.productservice.selectedproduct={
      _id: "",
      pname:"",
      category:"",
      subcategory:"",
      price:null,
      serialtag:"",
      description:""

    }
  }
  onSubmit(form: NgForm){
    console.log('Submit called');
    this.productservice.postEmployee(form.value).subscribe((res)=>{
      this.resetForm(form);
      console.log("SUCCESs");
    });
  }

}
