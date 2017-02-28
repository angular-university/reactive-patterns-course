
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

const lessonsListSubject = new SubjectImplementation();


export let lessonsList$: Observable = {

    subscribe: obs => {
        lessonsListSubject.subscribe(obs);
        obs.next(lessons);
    },

    unsubscribe: obs => lessonsListSubject.unsubscribe(obs)
};


let lessons : Lesson[]  = [];



export function initializeLessonsList(newList: Lesson[]) {
    lessons = _.cloneDeep(newList);
    lessonsListSubject.next(lessons);
}










