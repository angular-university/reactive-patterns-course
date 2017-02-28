import {Component, OnInit} from '@angular/core';
import {Lesson} from "../shared/model/lesson";
import * as _ from 'lodash';
import {Observer, store} from "../event-bus-experiments/app-data";

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer, OnInit {

    lessons: Lesson[] =[];

    ngOnInit() {
        store.lessonsList$.subscribe(this);
    }

    next(data: Lesson[]) {
        console.log('Lessons list component received data ..');
        this.lessons = data.slice(0);
    }

    toggleLessonViewed(lesson:Lesson) {
        console.log('toggling lesson ...');
        lesson.completed = !lesson.completed;
    }

    delete(deleted:Lesson) {
        _.remove(this.lessons,
            lesson => lesson.id === deleted.id )
    }



}



