import {Component} from '@angular/core';
import {globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON} from "../event-bus-experiments/event-bus";
import {Lesson} from "../shared/model/lesson";

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

    lessons: Lesson[] =[];

    constructor() {
        console.log('lesson list component is registered as observer ..');
        globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

        globalEventBus.registerObserver(ADD_NEW_LESSON, {
            notify: lessonText => {
                this.lessons.push({
                    id: Math.random(),
                    description: lessonText
                })
            }
        } );
    }

    notify(data: Lesson[]) {
        console.log('Lessons list component received data ..');
        this.lessons = data;
    }

    toggleLessonViewed(lesson:Lesson) {
        console.log('toggling lesson ...');
        lesson.completed = !lesson.completed;
    }



}
