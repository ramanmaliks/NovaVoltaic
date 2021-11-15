import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
private baseurl:string="http://localhost:8080/message"

  constructor(private http:HttpClient) { }
// Add message to db
  sendMessage(data:any)
{
 return this.http.post(`${this.baseurl}/add`,data)
}
// retrieving all the message from db
getMessage()
{
 return this.http.get(`${this.baseurl}/all`)
}

//create a new user in db
createLogin(data:any)
{
 return this.http.post(`${this.baseurl}/user/`,data)
}
// return details of current user
public getCurrentUser(){
  return this.http.get(`${this.baseurl}/current-user`);
}

//generate token from backend
sendLogin(data:any)
{
 return this.http.post(`${this.baseurl}/generate-token`,data)
}
// login user : set token in local storage
loginUser(token:any)
{
  localStorage.setItem("token", token);
  return true;
}
// isLogin : user is logged in or not
public isLoggedIn()
{
  let tokenStr = localStorage.getItem("token")
  if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
  { return false;
  }else{
    return true;
  }
}
// Logout : remove token from Local Storage
public logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}
// Get Token from local Storage
public getToken()
{
 return localStorage.getItem('token');
}

//set User Detail in local storage
public setUser(user:any)
{
  localStorage.setItem('user', JSON.stringify(user));
}
public getUser()
{
  let userStr= localStorage.getItem("user");
  if(userStr!=null)
  {
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

}
