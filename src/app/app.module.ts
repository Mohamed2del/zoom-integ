import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoomAuthComponent } from './zoom-auth/zoom-auth.component';  // Import HttpClientModule
import { RouterModule, Routes } from '@angular/router';
import { StartMeetingComponent } from './start-meeting/start-meeting.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'zoom-auth', component: ZoomAuthComponent },
  { path: 'start-meeting', component: StartMeetingComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ZoomAuthComponent,
    StartMeetingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes) // Initialize the routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
