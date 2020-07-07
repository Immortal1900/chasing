import { ProductService } from './../shared/products/product.service';
import { Component, OnInit } from '@angular/core';
import {Product} from './../shared/products/product.model'
 
@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css'],
  providers: [ProductService]
})
export class ShowproductsComponent implements OnInit {
productservice
  constructor(pr:ProductService) { 
    this.productservice=pr
  }

  ngOnInit(): void {
    this.showall();
  }
  showall(){
    console.log('SHOW ALL called');
    this.productservice.getallEmployee().subscribe((res)=>{
      this.productservice.products=res as Product[];
      console.log(this.productservice.products);
      
    });
  }

}
