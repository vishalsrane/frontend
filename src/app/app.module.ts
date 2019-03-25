import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ChartService } from 'src/app/chart.service';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    ChartComponent,
    HeaderComponent,
    SidemenuComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'home',
        component:HomeComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: '', component: DashboardComponent, pathMatch: 'full' },
          { path: 'users', component: UsersComponent, pathMatch: 'full' }
        ]
      }
    ]),
    AngularFontAwesomeModule
  ],
  providers: [
    ChartService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private chartService:ChartService) { }
  
}
