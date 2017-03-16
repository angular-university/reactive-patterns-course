import {Injectable} from '@angular/core';
import {User} from "../shared/model/user";
import {Observable, BehaviorSubject} from "rxjs";
import {Http, Headers} from "@angular/http";


export const UNKNOWN_USER : User = {
    firstName: 'Unknown'
};


@Injectable()
export class UserService {


    private subject = new BehaviorSubject(UNKNOWN_USER);

    user$: Observable<User> = this.subject.asObservable();


    constructor(private http:Http) {


    }


    login(email:string, password:string) {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('/api/login', {email,password}, headers)
            .map(res => res.json())
            .subscribe(
                user => this.subject.next(user),
                () => alert('Login Failed')
            );
    }


}
