import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginStaffService } from 'src/app/services/loginstaff.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   public loggedIn=false;
   public staffloggedIn=false;
    
   constructor(private loginService:LoginService,private loginstaffService:LoginStaffService){}
   account=''
  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
    this.staffloggedIn=this.loginstaffService.isstaffLoggedIn()

  }
  logoutstaff()
  {
    this.loginstaffService.logoutstaff()
    location.reload()
  }

  LogoutUser()
  {
    this.loginService.logout()
    window.location.href="/"
  }
  getaccountstaff()
  {
    if(this.loginstaffService.getaccountstaff()=="staff"){
      return true
    }
    else{
      return false
    }
    
  }
  getaccountuser()
  {
    if(this.loginService.getaccountuser()=="user"){
      return true
    }
    else{
      return false
    }
    
  }
}
