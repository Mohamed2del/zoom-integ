import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-zoom-auth',
  templateUrl: './zoom-auth.component.html',
  styleUrl: './zoom-auth.component.css'
})
export class ZoomAuthComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.sendCodeToBackend(code);
      } else {
        // Handle error or redirect
        console.error('Authorization code not found');
      }
    });
  }

  sendCodeToBackend(code: string) {
    this.http.post('http://localhost:8080/api/zoom/oauth', { code: code })
      .subscribe(
        (response: any) => {
          console.log('Success', response);
          this.authService.setToken(response.access_token);  // Assuming 'access_token' is the key in response
          this.router.navigate(['/start-meeting']);  // Navigate to the new component
        },
        error => {
          console.error('Error sending authorization code', error);
        }
      );
  }

}
