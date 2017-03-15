import {Component, OnInit, Input} from '@angular/core';
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";

@Component({
    selector: 'course-detail-header',
    templateUrl: './course-detail-header.component.html',
    styleUrls: ['./course-detail-header.component.css']
})
export class CourseDetailHeaderComponent {

    @Input()
    course: Course;

    @Input()
    lessons: Lesson[];


}
