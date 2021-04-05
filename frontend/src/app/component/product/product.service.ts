import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlBackEnd = "http://localhost:2021/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMsgm(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: Product): Observable<Product> { //mandando a requisição http para o back-end
    return this.http.post<Product>(this.urlBackEnd, product)
  }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlBackEnd)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.urlBackEnd}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.urlBackEnd}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product> {
    const url = `${this.urlBackEnd}/${id}`
    return this.http.delete<Product>(url)
  }

}
