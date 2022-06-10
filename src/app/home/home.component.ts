
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
showmode:string;


  constructor(private api:HttpClient) {
   this.showmode='showonlytemperature';
   }



  
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




}
