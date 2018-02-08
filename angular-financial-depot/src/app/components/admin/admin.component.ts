import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username: String;
  password: String;

  constructor(
              private userService: UserService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password,

    };

    this.userService.authenticateUser(user).subscribe( data => {
      if (!data.success) {
        this.router.navigate(['/']);
      } else {
        this.userService.storeUserData(data.token, data.user);
        this.router.navigate(['/blog']);
      }
    });
  }

  getBodyBg() {
    return "url('./assets/img/topography.png')";
  }

}
