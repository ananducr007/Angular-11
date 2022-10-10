import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MustMatch } from '../_helpers/must-match.validator';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Globalvariables } from '../Shared/Global.model';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
public UserRegisteration:any={};
public registerForm=new FormGroup({});
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
public submitted = false;

  constructor(public router:Router,private http:HttpClient,private fb: FormBuilder,public global:Globalvariables) { }

  ngOnInit() {
  
 this.registerForm  =  this.fb.group({
  firstName: ['',[Validators.required, Validators.minLength(3)]],
  lastName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
  password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
  confirmPassword: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    });
    //{
          //  validator: MustMatch('password', 'confirmPassword')
       // });
    
  }
  get f() { return this.registerForm.controls; }
  UerRegistration(){

       alert(this.registerForm.controls['firstName'].value)
        if (this.registerForm.invalid) {
          alert("not completed !");
           
        }else{
          
          var userdata={
            first_name:this.registerForm.controls['firstName'].value,
            last_name:this.registerForm.controls['lastName'].value,
            email:this.registerForm.controls['email'].value,
            avatar:"",
            password:this.registerForm.controls['password'].value,
            
          
          }
           this.http.post<any>('https://reqres.in/api/users', userdata).subscribe(data => {
            this.router.navigate(['/login']);
          
          },error => {
           
        });
       }



  }



}
