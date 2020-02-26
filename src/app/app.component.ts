import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Welcome to My First Proj';
  months=["January","February","March","April","May","June","July","August","September","October","November","December"]
 
 check=false;
 available=true;
 see=false;

myFun(event){
  alert("Button is Clicked");
  console.log(event);
}
changemonth(event){
  alert("Changed month from the DropDown");
  console.log(event);
}
fun1(event){
  this.see=!this.see;
  //for toggling on click of the button
}
title='Welcome to Pipe';



}

