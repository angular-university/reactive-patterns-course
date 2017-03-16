import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService:UserService) {
    }

    ngOnInit() {

    }

}
