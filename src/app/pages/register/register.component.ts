import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials={
    username:'',
    password:'',
    userPhNo:''
  }
  
  constructor(private registerService:RegisterService , private snackbar:MatSnackBar) { }

  ngOnInit(): void {

  }
  onsubmit()
  {
    // console.log("form is submitted");
    if((this.credentials.username!='' && this.credentials.password!='' && this.credentials.userPhNo!='')
    && (this.credentials.username!=null && this.credentials.password!=null && this.credentials.userPhNo!=null))
    {
      console.log("We have to submit the form to server");
      this.registerService.doRegister(this.credentials).subscribe(
        response=>{
          console.log(response);
          this.snackbar.open("Registration successfull","close")

          window.location.href="/login"
        },
        error=>{
          console.log(error);
          this.snackbar.open("Registration Failed","close")

        }
      )

    }else{
      console.log("fields are empty !!");
      this.snackbar.open("fields are empty","close")
    }
  }

}
