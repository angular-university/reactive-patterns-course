import {Component, OnInit, Input} from '@angular/core';
import {LessonsPager} from "../services/lessons-pager.service";
import {Observable} from "rxjs";
import {Lesson} from "../shared/model/lesson";
import {CoursesHttpService} from "../services/courses-http.service";
import {Course} from "../shared/model/course";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    providers: [LessonsPager]
})
export class CourseComponent implements OnInit {

    @Input()
    id: number;

    course$: Observable<Course>;

    lessons$: Observable<Lesson[]>;

    detail$: Observable<Lesson>;

    constructor(
        private lessonsPager: LessonsPager,
        private coursesService: CoursesHttpService) {

    }

    ngOnInit() {

        this.course$ = this.coursesService.findCourseById(this.id);

        this.lessons$ = this.lessonsPager.lessonsPage$;

        this.lessonsPager.loadFirstPage(this.id);
    }

    previous() {
        this.lessonsPager.loadPreviousPage();
    }

    next() {
        this.lessonsPager.loadNextPage();
    }

    selectDetail(lesson:Lesson) {
        console.log(lesson);
    }

}
