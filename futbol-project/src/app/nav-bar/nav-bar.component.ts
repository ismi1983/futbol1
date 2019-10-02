import { Component, OnInit } from '@angular/core';
import { faTable, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faTable = faTable;
  // faFutbol = faFutbol;
  faUsers = faUsers;
  faSignOut = faSignOutAlt;


  constructor() { }

  ngOnInit() {
  }

}
