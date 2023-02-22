import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent {
  getbooks:{ book_Id: number; img:string; accessnumber: string; title: string; author: string; subject: string; category: string; keyword:string; } []=[]
  mssg:undefined|string;
  searchName:any
  constructor(private books:BooksService , private snackbar:MatSnackBar) { }
  username:any
  id:any
  credentials:any
  result:any
  data:any=[]

  ngOnInit(): void {
    this.books.getbooks().subscribe((result:any)=>{
      console.warn(result)
      for(let i of result){
      this.getbooks.push(i)
      }
    })
  }
  deleteBook(book_Id:number)
  {
    console.warn("test Id",book_Id)
    this.books.deleteBook(book_Id).subscribe((result:any)=>
    {
      if(result){
        this.mssg="Book Deleted"
        this.snackbar.open("Book deleted","close")
        this.list()
      }
    })
    setTimeout(()=> {
      this.mssg=undefined
    },3000)
  }
  list()
  {
    this.books.getbooks().subscribe((result:any)=>{
      console.warn(result)
      for(let i of result){
      this.getbooks.push(i)
      }
    })
  }
  search(){
    this.getbooks.length=0
    this.books.getbookbytitle(this.searchName).subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            
            this.getbooks.push(i);
          }
        }
      }
    )
    this.books.getbookbyauthor(this.searchName).subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            
            this.getbooks.push(i);
          }
        }
      }
    )
    this.books.getbookbysubject(this.searchName).subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            
            this.getbooks.push(i);
          }
        }
      }
    )
    this.books.getbookbykeyword(this.searchName).subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            
            this.getbooks.push(i);
          }
        }
      }
    )
    this.books.getbookbycategory(this.searchName).subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            
            this.getbooks.push(i);
          }
        }
      }
    )
  }
}
