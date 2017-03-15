import {Injectable, OnInit} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "../shared/model/user";


export const ANONYMOUS_USER : User = {
    firstName: ' Anonymous',
    lastName: ''
}


@Injectable()
export class UserService implements OnInit {

   private subject =  new BehaviorSubject<User>(ANONYMOUS_USER);

   user$: Observable<User> = this.subject.asObservable();


  constructor() {


  }


  ngOnInit() {




  }



}
