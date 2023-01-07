import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/modules/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel [] = [];

  constructor (private productHttpservices:ProductHttpService) { 
  }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }
  getProducts(){
    this.productHttpservices.getAll().subscribe(
      response => {
this.products=response;
        //console.log(response);
    }
  );
}
  getProduct(){
    const url = 'https://api.escuelajs.co/api/v1/products';
    return this.productHttpservices.getOne(2).subscribe(
      response => {
        console.log(response);
    }
  );
}
  createProduct(){
    const data = {
      title:'esfero',
      price:45,
      description:'utiles escolares',
      categoryId:1,
      images:[],
    }
  const url = 'https://api.escuelajs.co/api/v1/products/';
  return this.productHttpservices.store(data).subscribe(
    response =>{
      console.log(response);
    }
  );
}
updateProduct(){
  const data = {
    title:'zapatos',
    price:45,
    description:'utiles escolares',
    categoryId:1,
    images:[],
  }
this.productHttpservices.update(1, data).subscribe(
  response =>{
    console.log(response);
  }
);
}

deleteProduct(id:ProductModel['id']){
  this.productHttpservices.destroy(id).subscribe(
    response =>{
      this.products = this.products.filter(product => product.id != id);
      //console.log(response);
    }
  );
}
}
