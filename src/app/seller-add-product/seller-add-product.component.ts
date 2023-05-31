import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string|undefined;

  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }

  submit(data:product){
    
    this.product.addProduct(data).subscribe((result)=>{
         console.log(result)
         if(result){
          this.addProductMessage="Product is Successfuly added"
         }
         setTimeout(()=>(this.addProductMessage=undefined),3000);
    })
  }

}
