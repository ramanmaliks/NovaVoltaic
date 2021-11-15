import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
dataus={
  usnm: this.backend.getUser.name
}
  constructor(public backend:BackendService) { }
 public logout(){
   this.backend.logout();
 }
  ngOnInit(): void {
  }

}
