import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder ,FormControl, Validators} from '@angular/forms';
import { Globalvariables } from '../Shared/Global.model';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public loginForm=new FormGroup({});
public submitted = false;

emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private http:HttpClient,public router:Router,private formBuilder: FormBuilder,public global:Globalvariables) { }

  ngOnInit() {
    
    this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      password: ['', Validators.required],
     
    });
  }
  get f(){
    return this.loginForm.controls;
  }
  submit(){
    if (this.loginForm.invalid) {
      alert("not completed !");
       
    }else{
      var userdata={
        email:this.loginForm.controls['email'].value,
        password:this.loginForm.controls['password'].value,
        
      
      }
      this.http.post<any>('https://reqres.in/api/login', userdata).subscribe(data => {
            
      this.global.UserObject = data;
      this.global.IsLoggedIn=true;
      this.router.navigate(['/dashboard']);
     },error => {
      this.global.IsLoggedIn=false;
      alert("Login Failed, either email or password is incorrect!");
  });
    }
  }
}
