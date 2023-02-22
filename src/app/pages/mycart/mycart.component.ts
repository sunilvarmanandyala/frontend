import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsService } from 'src/app/services/details.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {
  getDetails:{ userId: number,book_Id:number,date:string,status:string,user:object} []=[]
  // mssg:undefined|string;
  constructor(private details:DetailsService , private snackbar:MatSnackBar,private login:LoginService) { }
  userId:any
  result:any
  credentials={
    book_Id:'',
    user_Id:'',
    date:'',
    status:''
  }
  ngOnInit(): void {
    this.login.getUsername().subscribe(
      {
        next:(r:any)=>{
          console.log(r);
          this.login.getUser(r.username).subscribe(
            {
              next:(r:any)=>{
                
                console.log(r);
                this.details.getDetails(r.user_Id).subscribe((result:any)=>{
                  console.warn(result)
                  for(let i of result){
                  this.getDetails.push(i)
                  }
                })
              },
              error:(e)=>{
                console.log(e);
              }
            }
          )
        },
        error:(e)=>{
          console.log(e);
        }
      }
    )

    
   }

}
