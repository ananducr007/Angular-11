import { Component, OnInit } from '@angular/core';
import { Globalvariables } from './Shared/Global.model';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularProject11';
  constructor(public global:Globalvariables,public router:Router) { }
  ngOnInit(){
    
  }
  LogOut(){
   
    this.router.navigate(['/home']);
    this.global.IsLoggedIn=false;
  }
}
