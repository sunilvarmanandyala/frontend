import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterStaffService {
  static getToken() {
    throw new Error('Method not implemented.');
  }

  Url="http://localhost:9002";

  constructor(private  http:HttpClient) { }
  
  doRegister(credentials:any)
  {
    return this.http.post(`${this.Url}/staffadd`,credentials)
  }
  // for registeruser
  registerStaff(staffsadd: string)
  {
    localStorage.setItem("staffsadd",staffsadd)
    return true;
  }
  isRegister()
  {
    let staffsadd=localStorage.getItem("staffsadd")
    if(staffsadd==undefined|| staffsadd===''|| staffsadd==null )
    {
      return false
    }else{
      return true;
    }
  }
}
