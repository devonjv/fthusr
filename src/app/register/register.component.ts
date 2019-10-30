import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  private count: number = 0;
  private username:string;
  private password:string;
  private _username:string;
  private _password:string;

  public swit(){
    document.getElementById("lblUser").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("txtUser").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("txtUser").style.backgroundColor=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("tagUser").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("lblPass").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("txtPass").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("txtPass").style.backgroundColor=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("tagPass").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("btnOk").style.backgroundColor=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("btnOk").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("btnSkip").style.backgroundColor=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    document.getElementById("btnSkip").style.color=("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
  }

  ok(){
    let num:number=Math.floor(Math.random()*50);
    if(num%7==0){
      alert("I don't like you, start over")
      this.username = "";
      this.password = "";
      this._username = "";
      this._password = "";
      this.count = 0;
    }
    else if(this.count == 0){
      this.password = this._password;
      this.username = this._username;
      this.count++;
      this._password="";
    }
    else if (this._password != this.password){
      alert("WRONG, TRY AGAIN!")
      this.username = "";
      this.password = "";
      this._username = "";
      this._password = "";
      this.count = 0;
    }
  }

  ngOnInit() {
    setInterval(this.swit,250);
  }



}
