import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.apiCall();
    this.apiCallPost();
  }

  apiCall(){
    return this.http.get('https://reqres.in/api/users?page=2')
  }

  apiCallPost(){
    return this.http.post('https://reqres.in/api/users?page=2',{}).subscribe()
  }
}
