import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globalvariables } from '../Shared/Global.model';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
public userList:any={};
public userProfile:any={};
public IsProfile:boolean=false;
public CurrentPage:number=1;
  constructor(private http:HttpClient,public global:Globalvariables,public router:Router) { }

  ngOnInit() {

    if(this.global.IsLoggedIn){
      this.GetUsers();
    }else{
      this.router.navigate(['/home']);
    }
   
  }
GetUsers(){
  this.http.get<any>('https://reqres.in/api/users?page='+this.CurrentPage).subscribe(result => {

      this.userList = result;
      
     }, error => console.error(error));
}
GetUserProfile(id:any){

this.http.get<any>('https://reqres.in/api/users?id='+id).subscribe(result => {

      this.userProfile = result.data;
      this.IsProfile=true;
      
     }, error => console.error(error));
}
BackToList(){
  this.IsProfile=false;
}
ChangeUserPage(pageNumber:any){
this.CurrentPage=pageNumber;
this.GetUsers();
}
}
