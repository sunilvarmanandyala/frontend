import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterStaffService } from 'src/app/services/registerstaff.service';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {

  credentials={
    username:'',
    password:'',
    staffPhNo:''
  }
  
  constructor(private registerstaffService:RegisterStaffService , private snackbar:MatSnackBar) { }

  ngOnInit(): void {

  }
  onsubmit()
  {
    // console.log("form is submitted");
    if((this.credentials.username!='' && this.credentials.password!='' && this.credentials.staffPhNo!='')
    && (this.credentials.username!=null && this.credentials.password!=null && this.credentials.staffPhNo!=null))
    {
      console.log("We have to submit the form to server");
      this.registerstaffService.doRegister(this.credentials).subscribe(
        response=>{
          console.log(response);
          this.snackbar.open("Registration successfull","close")

          window.location.href="/login-staff"
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
