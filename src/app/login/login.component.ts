import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {HttpHeaders} from '@angular/common/http';
import {User} from '../shared/model/user';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {

    }

  login(email: string, password: string) {

    this.userService.login(email, password)
      .subscribe(
        () => {
          alert('Login Successful');
          this.router.navigateByUrl('/home')
        },
        (err) => console.error(err)
      );
  }

}
