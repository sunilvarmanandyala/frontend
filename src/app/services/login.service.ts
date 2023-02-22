import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static getToken() {
    throw new Error('Method not implemented.');
  }

  url="http://localhost:9001"

  constructor(private http:HttpClient) { }

  // calling the server to generate token

 generateToken(credentials:any){
  return this.http.post(`${this.url}/token`,credentials)
  }

  //for login user

loginUser(token: string)
{
  localStorage.setItem("token",token)
  localStorage.setItem("account", "user")
  return true;
}
getaccountuser(){
 return localStorage.getItem("account")
}
//to check user login or not
isLoggedIn()
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
logout(){
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
  let token=localStorage.getItem("token");
  return this.http.post(`${this.url}/token/get`,token);
}

getUser(username:any){
  return this.http.get(`${this.url}/user/name/${username}`);
}

// getusers()
// {
//   return this.http.get(`${this.url}/Getuser`)
// }
}