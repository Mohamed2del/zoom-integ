import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

    url  = "https://5a09-156-213-230-18.ngrok-free.app"
  redirectToZoomOAuth() {
        window.location.href = this.url+'/oauth2/authorization/zoom';
  }

  handleAuthentication() {
    // Assuming the backend sends a token or user info after successful authentication
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      this.http.post('/api/authenticate', { code }).subscribe(
        response => {
          console.log('Authentication successful', response);
          this.router.navigate(['/dashboard']); // Navigate to another route after successful login
        },
        error => {
          console.error('Failed to authenticate', error);
        }
      );
    }
  }
}
