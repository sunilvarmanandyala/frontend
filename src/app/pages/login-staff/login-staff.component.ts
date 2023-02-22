import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginStaffService } from 'src/app/services/loginstaff.service';

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent implements OnInit {
  credentials={
    username:'',
    password:''
  }
  msg='';
    constructor(private  loginstaffService:LoginStaffService  ,private snackbar:MatSnackBar){

  }
  ngOnInit(): void {

  }
  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log("WE have to submit the form to server");
      this.loginstaffService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
                 console.log(response);
                 this.loginstaffService.loginStaff(response.token)
                 this.snackbar.open("Login successfull","close")
                 window.location.href="/log"
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
        
      