import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
//  currentUser$: Observable<User>;
//  loggedIn: boolean;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
//    this.getCurrentUser();
//    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.accountService.login(this.model);
//      this.loggedIn = true;
    }, error => {
      alert("Invalid username or password.");
//      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
//    this.loggedIn = false;
  }

  /*
  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    });
  }
  */
}
