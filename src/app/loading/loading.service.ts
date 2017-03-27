import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable()
export class LoadingService {

    private subject = new BehaviorSubject<boolean>(false);

    loading$ = this.subject.asObservable();


    loadingOn() {
        this.subject.next(true);
    }

    loadingOff() {
        this.subject.next(false);
    }

}
