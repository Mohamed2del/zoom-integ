import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

    url  = "http://localhost:8080"
  redirectToZoomOAuth() {
    // to get from zoom dash
        window.location.href = 'https://zoom.us/oauth/authorize?client_id=3d3uuHV2QwaLtG9ll8VpNQ&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fzoom-auth';
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
