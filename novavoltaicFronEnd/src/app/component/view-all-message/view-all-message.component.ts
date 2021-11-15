import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-view-all-message',
  templateUrl: './view-all-message.component.html',
  styleUrls: ['./view-all-message.component.css']
})
export class ViewAllMessageComponent implements OnInit {
  // Pagination parameters.
  p: number = 1;
  count: number = 2;
 messagesObj =[
   {
     id:'',
     name:'',
     date:'',
     message:'Please Login to view Message'
   },
 ];
  constructor(private _message:BackendService) { }

  ngOnInit(): void {
    this._message.getMessage().subscribe(
      (data: any)=> {
        this.messagesObj=data;
        console.log(this.messagesObj)
      },
      (error)=> {
        console.log(error);
      }
    );

  }

}
