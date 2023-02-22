import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './pages/books/books.component';
import { LogComponent } from './pages/log/log.component';
import { LoginStaffComponent } from './pages/login-staff/login-staff.component';
import { RegisterStaffComponent } from './pages/register-staff/register-staff.component';
import { DetailsComponent } from './pages/details/details.component';
import {MatMenuModule} from '@angular/material/menu';
import { AllbooksComponent } from './pages/allbooks/allbooks.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import {MatCardModule} from '@angular/material/card';
import { BookslistComponent } from './pages/bookslist/bookslist.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MycartComponent } from './pages/mycart/mycart.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchComponent } from './pages/search/search.component';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { StatuslistComponent } from './pages/statuslist/statuslist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    LogComponent,
    LoginStaffComponent,
    RegisterStaffComponent,
    DetailsComponent,
    AllbooksComponent,
    UserlistComponent,
    BookslistComponent,
    MycartComponent,
    SearchComponent,
    StatuslistComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule,
    SlickCarouselModule,
    FontAwesomeModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
