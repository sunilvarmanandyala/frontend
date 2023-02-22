import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStaffService {
  static getToken() {
    throw new Error('Method not implemented.');
  }

  url="http://localhost:9002"

  constructor(private http:HttpClient) { }

  // calling the server to generate token

 generateToken(credentials:any){
  return this.http.post(`${this.url}/token`,credentials)
  }

  //for login user

loginStaff(token: string)
{
  localStorage.setItem("token",token)
  localStorage.setItem("account","staff")

  return true;
}
getaccountstaff(){
  return localStorage.getItem("account")
 }
//to check user login or not
isstaffLoggedIn()
{
  let token=localStorage.getItem("token");
  if(token==undefined || token==='' || token==null)
  {
    return false;
  }
  else
  {
    return true;
  }
}
//for logout the user
logoutstaff(){
  localStorage.removeItem('token');
  localStorage.removeItem('account')
  return true;
}
//for getting token
getToken()
{
  return localStorage.getItem("token")
}
getUsername(){
  return this.http.post(`${this.url}/staff/token/get`,localStorage.getItem("token"))
}
getdetails(){
  let name=this.getUsername()
  return this.http.get(`${this.url}/staff/${name}`)
}

}
