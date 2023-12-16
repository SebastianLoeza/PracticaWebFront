import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  lista:DTO_Producto[]= [];
  constructor(private pService:ProductoService){
    pService.GetProducts().subscribe(result=>{
      this.lista=result.products;
      console.log("Lista",this.lista);
      pService.PostProduct(this.lista[0]).subscribe(result =>{
        console.log(result);
      })
    });
  }

}
export interface DTO_Producto {
  id:number,
  title:string,
  description:string,
  price:number,
  discountPercentage:number,
  rating:number,
  stock:number,
  brand:string,
  category:string,
  thumbnail:string,
  images:string []
}