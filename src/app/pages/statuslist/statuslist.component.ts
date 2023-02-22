import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsService } from 'src/app/services/details.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-statuslist',
  templateUrl: './statuslist.component.html',
  styleUrls: ['./statuslist.component.css']
})
export class StatuslistComponent {
  getAllDetails:{ userId: number,book_Id:number,date:string,status:string,user:object} []=[]
  // mssg:undefined|string;
  constructor(private details:DetailsService , private snackbar:MatSnackBar) { }
  userId:any
  result:any
  credentials={
    book_Id:'',
    user_Id:'',
    date:'',
    status:''
  }
  ngOnInit(): void {
    this.details.getAllDetails().subscribe((result:any)=>{
      console.warn(result)
      for(let i of result){
      this.getAllDetails.push(i)
      }
    })
    
  }
}
