import { Component, OnInit } from '@angular/core';
import * as CONSTANTS from '../../shared/constants';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title: string;
  buttonCrear: string;
  isHandset: Observable<BreakpointState> = this.breackpointObserver.observe(Breakpoints.Handset);

  constructor(private breackpointObserver: BreakpointObserver) {
    this.title = CONSTANTS.TITLE;
    this.buttonCrear = CONSTANTS.CREAR_MEETUP;
  }

  ngOnInit(): void {
  }

}
