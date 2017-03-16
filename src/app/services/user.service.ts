import {Injectable} from '@angular/core';
import {User} from "../shared/model/user";
import {Observable} from "rxjs";


export const UNKNOWN_USER : User = {
    firstName: 'Unknown'
};


@Injectable()
export class UserService {


    user$: Observable<User> = Observable.of(UNKNOWN_USER);


    constructor() {


    }

}
