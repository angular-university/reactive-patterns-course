import {Component, OnInit, Input} from '@angular/core';
import {CourseMdService} from "../services/course-md.service";
import {Course} from "../shared/model/course";
import {Observable} from "rxjs";
import {Lesson} from "../shared/model/lesson";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    providers: [CourseMdService]
})
export class CourseComponent implements OnInit {

    @Input()
    id: number;

    course$: Observable<Course>;

    lessons$: Observable<Lesson[]>;

    constructor(private courseMdService: CourseMdService) {

    }

    ngOnInit() {
        this.course$ = this.courseMdService.course$;
        this.lessons$ = this.courseMdService.lessonsPage$;

        this.courseMdService.loadCourseById(this.id);
    }

    previous() {

    }

    next() {

    }

    selectDetail(lesson:Lesson) {

    }

}
