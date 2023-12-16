import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DTO_Producto } from '../productos/productos.component';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  public GetProducts():Observable<any>{
    return this.http.get("https://dummyjson.com/products");
  }

  public PostProduct(nombre:DTO_Producto):Observable<any>{
    return this.http.post("https://dummyjson.com/products",
    JSON.stringify(nombre));
  }

}
