import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-start-meeting',
  templateUrl: './start-meeting.component.html',
  styleUrl: './start-meeting.component.css'
})
export class StartMeetingComponent {
  meetingDetails: any;

  constructor(private authService: AuthService) {}

  startMeeting() {
    const meetingInfo = {
      topic: "New Meeting",
      type: 2,
      start_time: new Date().toISOString(),
      duration: 30, // Duration in minutes
      timezone: "America/New_York"
    };

    this.authService.createMeeting(meetingInfo).subscribe(
      response => {
        this.meetingDetails = response;
        console.log('Meeting created:', response);
      },
      error => {
        console.error('Failed to create meeting', error);
      }
    );
  }
}
