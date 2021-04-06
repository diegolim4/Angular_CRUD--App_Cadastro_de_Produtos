import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlBackEnd = "http://localhost:2021/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMsgm(msg: string, isError: Boolean = true): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ['msg-error']
    })
  }

  create(product: Product): Observable<Product> { //mandando a requisição http para o back-end
    return this.http.post<Product>(this.urlBackEnd, product).pipe(
      map((obj) => obj),
      catchError( e => this.errorBackend(e))
    )
  }  

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlBackEnd).pipe(
      map((obj) => obj),
      catchError( e => this.errorBackend(e))
    )
  }

  readById(id: string): Observable<Product> {
    const url = `${this.urlBackEnd}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorBackend(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.urlBackEnd}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError( e => this.errorBackend(e))
    )
  }

  delete(id: number): Observable<Product> {
    const url = `${this.urlBackEnd}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorBackend(e))
    )
  }

  errorBackend(e: any): Observable<any> {
    this.showMsgm('Ocorreu um Erro!')
    return EMPTY
  }

}
