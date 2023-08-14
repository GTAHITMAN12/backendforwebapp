import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data2 } from './data2';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders().set('Content-Type','applicattion/json');
  httpOptions = {
    headers: this.headers
  };

  items: Data2[] = [];
  addorder(value:Data2): Observable<Data2>{
    const body = new HttpParams()
    .set('order_id', value.order_id)
    .set('name', value.name)
    .set('price', value.price)
    .set('store_id', value.store_id)
    .set('address', value.address)


    let obs= this.http.post<Data2>
    ('http://localhost:3000/order/addorder',body.toString(),{headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')});
    return obs;
  }

  getorders(): Observable<Data2[]>{
    return this.http.get<Data2[]>
    ('http://localhost:3000/order')
    .pipe(tap(order => {
      console.log('order fetched...');
      console.log(order); })
    );
  };

  getorder(id: number): Observable<Data2> {
    return this.http.get<Data2>(`http://localhost:3000/order/${id}`);
  }
 
  editorder(id: number,value:Data2): Observable<Data2> {
    const body = new HttpParams()
    .set('order_id', value.order_id)
    .set('name', value.name)
    .set('price', value.price)
    .set('store_id', value.store_id)
    .set('address', value.address)
    return this.http.put<Data2>(`http://localhost:3000/order/${id}`,body.toString(),{headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  // Delete
  delete(id: number): Observable<Data2> {
    return this.http.delete<Data2>(`http://localhost:3000/order/${id}`,this.httpOptions);
  }

 

}
