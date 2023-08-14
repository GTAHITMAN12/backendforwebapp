import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data3 } from 'src/app/data3';
@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders().set('Content-Type','applicattion/json');
  httpOptions = {
    headers: this.headers
  };
  getsale(): Observable<Data3[]>{
    return this.http.get<Data3[]>
    ('http://localhost:3000/sales')
    .pipe(tap(order => {
      console.log('order fetched...');
      console.log(order); })
    );
  };

}
