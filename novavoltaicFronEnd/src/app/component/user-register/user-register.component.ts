import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
data={
  username:'',
  password:''
}
  constructor(private snack:MatSnackBar,private backend:BackendService,private _route:Router) { }

  ngOnInit(): void {
  }
  doSubmitForm(){
    console.log("form submit",this.data);
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
    this.backend.createLogin(this.data).subscribe(
      response=>{
        console.log(response);
        this._route.navigate(['/']);        
        this.snack.open("Welcome!! Registeration Successfull","OK",{ duration:3000,horizontalPosition:'end',verticalPosition:'top'});
      },
      error=>{
        console.log(error);
        this.snack.open("Error!! Username Already Exists","OK",{ duration:3000,horizontalPosition:'end',verticalPosition:'top'});
      }
    )
  }
}
