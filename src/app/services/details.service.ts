import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  Url="http://localhost:9004";

  constructor(private  http:HttpClient){}

  doAddDetails(credentials:any)
  {
    return this.http.post(`${this.Url}/detailsadd`,credentials)
  }
  // to add Details
  adddetails(details: string){
    localStorage.setItem("details",details)
    return true;
  }
  isAddDetails()
  {
    let adddetails=localStorage.getItem("details");
    if(adddetails==undefined || adddetails==='' || adddetails==null )
  {
    return false;
  }else{
    return true;
  }
  }
  getAllDetails()
  {
    return this.http.get(`${this.Url}/Alldetails`)
  }
  getDetails(userId:any)
  {
    return this.http.get(`${this.Url}/details/${userId}`)
  }

  // deleteDetails(user_Id:any)
  // {
  //   return this.http.delete(`${this.Url}/details/${user_Id}`)
  // }

}