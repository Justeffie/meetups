import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meetup} from '../models/meetup';
import {MeetupService} from '../services/meetup.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: ['./meetups-list.component.scss']
})
export class MeetupsListComponent implements OnInit {

  meetups: Meetup[];

  constructor(private meetupService: MeetupService) { }

  ngOnInit(): void {
    this.meetupService.fetchAll().subscribe((data) => this.meetups = data);
  }

}
