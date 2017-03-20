import {Component, OnInit, Input} from '@angular/core';
import {CourseMdService} from "../services/course-md.service";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    providers: [CourseMdService]
})
export class CourseComponent implements OnInit {

    @Input()
    id: number;

    constructor(private courseMdService: CourseMdService) {

    }

    ngOnInit() {

    }

}
