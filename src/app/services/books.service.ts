import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 
  Url="http://localhost:9003";

  constructor(private  http:HttpClient){}

  doAddBook(credentials:any)
  {
    return this.http.post(`${this.Url}/Addbook`,credentials)
  }
  // to add book
  addbook(books: string){
    localStorage.setItem("books",books)
    return true;
  }
  isAddBook()
  {
    let addbook=localStorage.getItem("books");
    if(addbook==undefined || addbook==='' || addbook==null )
  {
    return false;
  }else{
    return true;
  }
}
  getbooks()
  {
    return this.http.get(`${this.Url}/books`)
  }
  deleteBook(book_Id:number)
  {
    return this.http.delete(`${this.Url}/book/${book_Id}`)
  }
  getbookbytitle(title:any)
  {
    return this.http.get(`${this.Url}/book/title/${title}`)
  }
  getbookbyauthor(author:any)
  {
    return this.http.get(`${this.Url}/book/author/${author}`)
  }
  getbookbysubject(subject:any)
  {
    return this.http.get(`${this.Url}/book/subject/${subject}`)
  }
  getbookbykeyword(keyword:any)
  {
    return this.http.get(`${this.Url}/book/keyword/${keyword}`)
  }
  getbookbycategory(category:any)
  {
    return this.http.get(`${this.Url}/book/category/${category}`)
  }
  // searchBook(query:string)
  // {
  //   return this.http.get{}
  // }
}



