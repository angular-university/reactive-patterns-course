import { Component, OnInit } from '@angular/core';
import {Lesson} from "../shared/model/lesson";
import {Observer, store} from "../event-bus-experiments/app-data";

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer, OnInit {




    lessonsCounter = 0;

    ngOnInit() {

        console.log('lesson list component is registered as observer ..');

        store.lessonsList$.subscribe(this);

    }

    next(data: Lesson[]) {
        console.log('counter component received data ..');
        this.lessonsCounter = data.length;
    }

}
