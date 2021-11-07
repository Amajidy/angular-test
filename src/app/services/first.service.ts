import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../interfaces/getHTTP.interface';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  url:string = 'https://jsonplaceholder.typicode.com/'
  constructor(private http$:HttpClient) { }
  a={
    userId:1000,
    id:1000,
    title:"kossher",
    body:"badane kossher"
  }
  getAPI():Observable<Config> {
    return this.http$.get<Config>(`${this.url}users`)
  }
  postAPI():Observable<Config>{
    return this.http$.post<Config>(`${this.url}posts`,this.a)
  }
}
