import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";
import {Http} from "@angular/http";
import {Lesson} from "../shared/model/lesson";


@Injectable()
export class LessonsPager {

    private subject = new BehaviorSubject<Lesson[]>([]);

    lessonsPage$ : Observable<Lesson[]> = this.subject.asObservable();

    private courseId:number;
    private currentPageNumber = 1;

    constructor(private http:Http) {

    }

    loadFirstPage(courseId: number) {

    }

    loadNextPage() {

    }

    loadPreviousPage() {

    }

    loadPage(pageNumber:number) {

        this.currentPageNumber = pageNumber;

        this.http.get('/api/lessons/',
            {
                params: {
                    courseId: this.courseId,
                    pageNumber:1,
                    pageSize: 5
                }
            })
            .map(res => res.json())
            .subscribe(
                lessons => this.subject.next(lessons)
            );
    }

}
