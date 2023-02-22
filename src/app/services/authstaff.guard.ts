import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStaffService } from './loginstaff.service';

@Injectable({
  providedIn: 'root'
})
export class AuthstaffGuard implements CanActivate {
  constructor(private loginstaffService:LoginStaffService,private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginstaffService.isstaffLoggedIn())
      {
       return true;
      }
      this.router.navigate(['loginstaff'])
       return false;
     }
   
 }
 