import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { LogComponent } from './pages/log/log.component';
import { LoginStaffComponent } from './pages/login-staff/login-staff.component';
import { RegisterStaffService } from './services/registerstaff.service';
import { RegisterStaffComponent } from './pages/register-staff/register-staff.component';
import { DetailsComponent } from './pages/details/details.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { BookslistComponent } from './pages/bookslist/bookslist.component';
import { AllbooksComponent } from './pages/allbooks/allbooks.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { StatuslistComponent } from './pages/statuslist/statuslist.component';
 
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'books', component:BooksComponent},
  {path:'log',component:LogComponent},
  {path:'login-staff', component:LoginStaffComponent},
  {path:'register-staff', component:RegisterStaffComponent},
  {path:'details', component:DetailsComponent},
  {path:'userlist', component:UserlistComponent},
  {path:'bookslist',component:BookslistComponent, pathMatch:'full'},
  {path:'allbooks',component:AllbooksComponent,pathMatch:'full'},
  {path:'mycart',component:MycartComponent,pathMatch:'full'},
  {path:'statuslist',component:StatuslistComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
