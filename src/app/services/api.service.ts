import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { HeaderComponent} from '../header/header.component'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }


weather(){
  var baseURL="https://api.openweathermap.org/data/2.5/weather?q={{city}}&appid=bc645b6a6e278cf237a8f16ac7167754"
  return this.api.get(baseURL)

  
}
}
