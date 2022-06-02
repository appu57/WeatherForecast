
import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { weather }  from '../shared/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sunrise:string;
  sunset:string;
  data:any;
  error:any;
  dataday:any;
 bgColor : string = 'blue';
 bgColor1 : string = 'blue';
hour:any[];


  constructor(private api:HttpClient) { }



  
  ngOnInit() {
 


  

}

addItem(newItem:string) {
  this.data=newItem;
  this.bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  //for change of bg color in another component with different color
  this.bgColor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  var sec = this.data.sys.sunrise;
  var date = new Date(sec * 1000);
  var timestr = date.toLocaleTimeString();
  this.sunrise=timestr;
  var second = this.data.sys.sunset;
  var date = new Date(second * 1000);
  var timeset = date.toLocaleTimeString();
  this.sunset=timeset;
}


// close(newItem1:string){
//   this.dataday=newItem1;
// }

weather(data:string){
  var base1URL = "https://api.openweathermap.org/data/2.5/forecast?q="+data+"&appid=bc645b6a6e278cf237a8f16ac7167754"
  this.api.get(base1URL)
    .subscribe((res)=>{
      this.dataday =res;
      console.log(this.data);
      console.log(this.dataday);
      // this.hour=[this.dataday];  
    
    },
    (err)=>{
      alert("Searched city was not found.Try with a valid city name");
//To enable the clicking of another button in different component with data entered in different componenent, write button inside ngIf use the exact interpolation used to display the data in click function for eg data.name removing interpolation symbol 
//In ts file write in method weather(data:string).


    })

}
}
