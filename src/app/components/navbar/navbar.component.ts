import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public af:AngularFire, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this._flashMessagesService.show('You are logout successfully', { cssClass: 'alert-success', timeout: 2000 });
  }
}
