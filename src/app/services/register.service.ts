import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  static getToken() {
    throw new Error('Method not implemented.');
  }

  Url="http://localhost:9001";

  constructor(private  http:HttpClient) { }
  
  doRegister(credentials:any)
  {
    return this.http.post(`${this.Url}/useradd`,credentials)
  }
  // for registeruser
  registerUser(usersadd: string)
  {
    localStorage.setItem("usersadd",usersadd)
    return true;
  }
  isRegister()
  {
    let usersadd=localStorage.getItem("usersadd")
    if(usersadd==undefined|| usersadd===''|| usersadd==null )
    {
      return false
    }else{
      return true;
    }
  }
  getusers()
  {
    return this.http.get(`${this.Url}/Getuser`)
  }
  deleteUser(user_Id:number)
  {
    return this.http.delete(`${this.Url}/user/${user_Id}`)
  }
  }
