
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from 'src/app/services/books.service';
import { DetailsService } from 'src/app/services/details.service';
import { LoginService } from 'src/app/services/login.service';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  bookList:{book_Id: number, title:string}[]=[]
  credentials={
    book_Id:'',
    userId:'',
    date:"",
    status:''
  }
  msg='';
  constructor(private detailsService:DetailsService, private snackbar:MatSnackBar, private login:LoginService, private books:BooksService, public datepipe: DatePipe){
  //  currentDate:any=this.datepipe.transform((new Date), 'MM/dd/yyyy')
  }
  ngOnInit(): void {
    
    // this.credentials.date=this.currentDate
    this.login.getUsername().subscribe(
      {
        next:(r:any)=>{
          console.log(r);
          this.login.getUser(r.username).subscribe(
            {
              next:(r:any)=>{
                this.credentials.userId=r.user_Id;
                console.log(r);
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
    this.books.getbooks().subscribe(
      {
        next:(r:any)=>{
          console.log(r);
          for(let i of r){
            this.bookList.push(i)
          }
        },
        error:(e)=>{
          console.log(e);
        }
      }
    )

}
  onSubmit() 
  {
    // console.log("form is submitted")
    if((this.credentials.book_Id!='' && this.credentials.userId!='' && this.credentials.date!='' && this.credentials.status!='') 
    && (this.credentials.book_Id!=null && this.credentials.userId!=null && this.credentials.date!=null && this.credentials.status!=null))
    {
      console.log("We have to submit the form to server");
      this.detailsService.doAddDetails(this.credentials).subscribe(
      response=>{
        console.log(response);
        this.snackbar.open("Details Added Successfull","close")
        window.location.href="/mycart"
  
      },
      error=>{
        console.log(error);
        this.msg='bad details';
        this.snackbar.open("Failed to add Details","close")
      }
        )
      }
      else{
        console.log("Fields are empty !!");
        this.snackbar.open("Fields are Empty!!","close")
      }
    }
  
  
  }