import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../shared/model/lesson";
import {CoursesHttpService} from "../services/courses-http.service";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

    @Input()
    id: number;

    constructor(private coursesService: CoursesHttpService) {

    }

    ngOnInit() {

    }

    previousLessonsPage() {

    }

    nextLessonsPage() {

    }

    backToMaster() {

    }

    selectDetail(lesson:Lesson) {

    }

    ngOnDestroy() {
        console.log('destroying CourseComponent ...');
    }

}
