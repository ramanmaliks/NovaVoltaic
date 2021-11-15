import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data={
  username:'',
  password:''
}
  constructor(private snack:MatSnackBar,private backend:BackendService,private _route:Router) { }

  ngOnInit(): void {
  }
  doSubmitForm(){
    console.log("form submit");
   // if(this.data.from=='' || this.data.messagedate==''|| this.data.message=='')
   if(this.data.username==null|| this.data.username.trim()=='')
    {
      this.snack.open("Username cannot be empty!!","OK",{ duration:2000,horizontalPosition:'end',verticalPosition:'top'});
      return ;
    }
    if(this.data.password==null|| this.data.password.trim()=='')
    {
      this.snack.open("Password cannot be empty!!","OK",{ duration:2000,horizontalPosition:'end',verticalPosition:'top'});
      return ;
    }
    // request for token generation
    this.backend.sendLogin(this.data).subscribe(
      (data:any)=>{
        console.log(data);
        //login
        this.backend.loginUser(data.token);
        this.backend.getCurrentUser().subscribe(
          (user:any)=>{
            this.backend.setUser(user);
            console.log(user);
          }
        )
        //redirect .... homePage
        this._route.navigate(['/']);        
        this.snack.open("Welcome!! Login Successfull","OK",{ duration:2000,horizontalPosition:'end',verticalPosition:'top'});
      },
      error=>{
        console.log(error);
        this.snack.open("Error!! Username or Password mistmatch","OK",{ duration:2000,horizontalPosition:'end',verticalPosition:'top'});
      }
    )
  }
}
