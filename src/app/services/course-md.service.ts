import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";
import {Course} from "../shared/model/course";
import {Http} from "@angular/http";
import {Lesson} from "../shared/model/lesson";

const UNKNOWN_COURSE: Course = {
    id: undefined,
    url: '',
    description: '',
    iconUrl: '',
    courseListIcon: '',
    longDescription: ''
};

@Injectable()
export class CourseMdService {

    private courseSubject = new BehaviorSubject<Course>(UNKNOWN_COURSE);

    course$: Observable<Course> = this.courseSubject.asObservable();

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

    lessonsPage$ : Observable<Lesson[]> = this.lessonsSubject.asObservable();

    constructor(private http:Http) {

    }

    loadCourseById(id: number) {

        this.http.get(`/api/courses/${id}`)
            .map(res => res.json())
            .subscribe(
                course => this.courseSubject.next(course)
            );

        this.http.get('/api/lessons/',
            {
                params: {
                    courseId:id,
                    pageNumber:1,
                    pageSize: 5
                }
            })
            .map(res => res.json())
            .subscribe(
                lessons => this.lessonsSubject.next(lessons)
            );
    }




}
