import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  credentials={
    img:'',
    accessnumber:'',
    title:'',
    author:'',
    subject:'',
    keyword:'',
    category:''
  }
  msg='';

  constructor(private booksService:BooksService,private snackbar:MatSnackBar){}
  ngOnInit():void{

    
  }
  onSubmit() {
    if((this.credentials.accessnumber!='' && this.credentials.title!='' && this.credentials.author!='' && this.credentials.subject!='' && this.credentials.keyword!='' && this.credentials.category!='')
    && (this.credentials.accessnumber!=null && this.credentials.title!=null && this.credentials.author!=null && this.credentials.subject!=null && this.credentials.keyword!=null && this.credentials.category!=null))
  {
    console.log("We have to submit the form to server");
    this.booksService.doAddBook(this.credentials).subscribe(
    response=>{
      console.log(response);
      this.snackbar.open("Book Added Successfull","close")

    },
    error=>{
      console.log(error);
      this.msg='bad details';
      this.snackbar.open("Failed to add Book","close")
    }
      )
    }
    else{
      console.log("Fields are empty !!");
      this.snackbar.open("Fields are Empty!!","close")
    }
  }


}
