import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'

})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  authenticateWithZoom(): void {
    this.authService.redirectToZoomOAuth();
  }
}