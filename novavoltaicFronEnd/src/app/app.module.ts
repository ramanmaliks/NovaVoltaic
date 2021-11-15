import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MessageComponent } from './component/message/message.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BackendService } from './service/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllMessageComponent } from './component/view-all-message/view-all-message.component';
import {MatCardModule} from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './component/login/login.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { authInterceptorProviders } from './service/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MessageComponent,
    ViewAllMessageComponent,
    LoginComponent,
    UserRegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    NgxPaginationModule,
    
  ],
  providers: [MatSnackBarModule,BackendService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
