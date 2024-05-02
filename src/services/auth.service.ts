import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null = null;
  private baseUrl: string = 'http://localhost:8080/api/zoom'; // Adjust based on your actual backend URL

  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    this.accessToken = token;
    localStorage.setItem('zoomAccessToken', token);  // Optionally store in localStorage for persistent state
  }

  getToken(): string | null {
    return this.accessToken || localStorage.getItem('zoomAccessToken');
  }

  clearToken(): void {
    this.accessToken = null;
    localStorage.removeItem('zoomAccessToken');
  }

  createMeeting(meetingDetails: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/meetings`, meetingDetails, { headers });
  }
}
