import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Data } from './data';
import { Observable,} from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders().set('Content-Type','applicattion/json');
  httpOptions = {
    headers: this.headers
  };

  items: Data[] = [];
  additem(value:Data): Observable<Data>{
    const body = new HttpParams()
    .set('id', value.id)
    .set('name', value.name)
    .set('price', value.price)
    .set('target_sale', value.target_sale)
    .set('description', value.description)
    .set('stock', value.stock);

    let obs= this.http.post<Data>
    ('http://localhost:3000/store/additem',body.toString(),{headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')});
    return obs;
  }

  getItem(): Observable<Data[]>{
    return this.http.get<Data[]>
    ('http://localhost:3000/store')
    .pipe(tap(items => {
      console.log('item fetched...');
      console.log(items); })
    );
  };

  getItems(id: number): Observable<Data> {
    return this.http.get<Data>(`http://localhost:3000/store/${id}`);
  }
 
  edititem(id: number,value:Data): Observable<Data> {
    const body = new HttpParams()
    .set('id', value.id)
    .set('name', value.name)
    .set('price', value.price)
    .set('target_sale', value.target_sale)
    .set('description', value.description)
    .set('stock', value.stock);
    return this.http.put<Data>(`http://localhost:3000/store/${id}`,body.toString(),{headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  // Delete
  delete(id: number): Observable<Data> {
    return this.http.delete<Data>(`http://localhost:3000/store/${id}`,this.httpOptions);
  }

 

}
