import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";

@Injectable()
export class MessagesService {


    private errorsSubject = new BehaviorSubject<string[]>([]);

    errors$: Observable<string[]> = this.errorsSubject.asObservable();


    constructor() {
        console.log('created MessagesService...');
    }

    error(...errors:string[]) {
        this.errorsSubject.next(errors);
    }


}
