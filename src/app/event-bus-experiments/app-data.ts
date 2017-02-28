
import * as _ from 'lodash';
import {Lesson} from "../shared/model/lesson";



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


class DataStore {

    private lessons : Lesson[]  = [];

    private lessonsListSubject = new SubjectImplementation();

    public lessonsList$: Observable = {

        subscribe: obs => {
            this.lessonsListSubject.subscribe(obs);
            obs.next(this.lessons);
        },

        unsubscribe: obs => this.lessonsListSubject.unsubscribe(obs)
    };

    initializeLessonsList(newList: Lesson[]) {
        this.lessons = _.cloneDeep(newList);
        this.lessonsListSubject.next(this.lessons);
    }

}

export const store = new DataStore();







