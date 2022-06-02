import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newCloseEvent = new EventEmitter<string>();


city:string;
data:any;
err:any;
dataday:any;

  constructor(private api:HttpClient) { }

  ngOnInit() {

  }

  addNewItem() {
    var baseURL="https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=bc645b6a6e278cf237a8f16ac7167754"
    this.api.get(baseURL)
     .subscribe((res)=>{
       this.data=res;
       this.city=this.city;
console.log(this.data);
       this.newItemEvent.emit(this.data);
      
    
     },
     (err)=>{
      alert("Searched City doesnt exist.Re-enter a Valid city");


     }
      )
  
  }

}
