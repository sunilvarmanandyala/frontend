import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 getusers:{user_Id: number, username: string, password: string, userPhNo: string } []=[]
 mssg:undefined|string; 
 constructor(private users:RegisterService , private snackbar:MatSnackBar) { }
  username:any
  id:any
  credentials:any
  data:any=[]

  ngOnInit(): void {
    this.users.getusers().subscribe((result:any)=>{
      console.warn(result)
      for(let i of result){
      this.getusers.push(i)
      }
    })
  }
  deleteUser(user_Id:number )
  {
    console.warn("test Id",user_Id)
    this.users.deleteUser(user_Id).subscribe((result:any)=>
    {
      if(result){
       this.mssg="User Deleted";
       this.snackbar.open("User Deleted","close")
      this.list()
      }
    })
    setTimeout(()=> {
      this.mssg=undefined
    },3000)
  }
  list(){
    this.users.getusers().subscribe((result:any)=>{
      console.warn(result)
      for(let i of result){
      this.getusers.push(i)
      }
  })
  }
}