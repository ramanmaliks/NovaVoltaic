import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  
data={
  //from:"",
  name: this.backend.getUser().username,
  date:new Date(),
  message:""
} 

  constructor(public backend:BackendService,private snack:MatSnackBar, private _route:Router) { 
    
    }

  ngOnInit(): void {
   // console.log("date :" + this.data.date);
  }
  doSubmitForm(){
   // console.log("form submit");
   if(this.data.date==null|| this.data.message=='')
    {
      this.snack.open("fields cannot be empty!!","OK",{ duration:2000,horizontalPosition:'end',verticalPosition:'top'});
      return ;
    }
    //saving data in db
    this.backend.sendMessage(this.data).subscribe(
      response=>{
      //  console.log(response);
        this._route.navigate(['/']);        
        this.snack.open("Success!! Your Message has entered","OK",{ duration:2000,horizontalPosition:'end',verticalPosition:'top'});
      },
      error=>{
      //  console.log(error);
        this.snack.open("error!! server problem","OK",{ duration:2000,horizontalPosition:'end',verticalPosition:'top'});
      }
    )
  }
  // for reset the fields
  btnClick(){
        this.data.message="";
        this.data.date=new Date();
    
  }
}
