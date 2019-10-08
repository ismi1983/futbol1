import { Component, OnInit } from '@angular/core';
import { faTable, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faTable = faTable;
  faUsers = faUsers;
  faSignOut = faSignOutAlt;


  constructor(private loginService: LoginService) { }

  logOut() {
    this.loginService.logOut();
  }

  ngOnInit() {
  }

}
