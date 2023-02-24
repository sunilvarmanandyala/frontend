import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:'',
    password:''
  }
  msg='';
  constructor(private loginService:LoginService, private snackbar:MatSnackBar){

  }
  ngOnInit(): void {

}
onSubmit()
{
  // console.log("form is submitted")
  if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))
{
  console.log("WE have to submit the form to server");
  this.loginService.generateToken(this.credentials).subscribe(
  (response:any)=>{
    //success
           console.log(response);
           this.loginService.loginUser(response.token)
           this.snackbar.open("Login successfull","close")
           window.location.href="/allbooks"
  },
  error=>{
    //error
      //  console.log(error);
       console.log("exception occured")
       this.msg='bad credentials incorrect username or password';
       this.snackbar.open("Login failed","close")
  
      }
      
      )
  
    }
  
    else{
      console.log("Fields are empty !!")
      this.snackbar.open("fields are empty","close")
    }
    }
  
  }
  
