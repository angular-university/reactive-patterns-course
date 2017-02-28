
import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';

export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';


export interface Observer {
    next(data:any);
}

export interface Observable {
    subscribe(obs:Observer);
    unsubscribe(obs:Observer);
}


interface Subject extends Observer, Observable {

}


class SubjectImplementation implements Subject {

    private observers: Observer[] = [];

    next(data: any) {
        this.observers.forEach(obs => obs.next(data));
    }

    subscribe(obs: Observer) {
        this.observers.push(obs);
    }

    unsubscribe(obs: Observer) {
        _.remove(this.observers, el => el === obs);
    }

}







