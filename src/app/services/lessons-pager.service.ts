import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";
import {Http} from "@angular/http";
import {Lesson} from "../shared/model/lesson";


@Injectable()
export class LessonsPager {

    private static readonly PAGE_SIZE = 3;

    private subject = new BehaviorSubject<Lesson[]>([]);

    lessonsPage$ : Observable<Lesson[]> = this.subject.asObservable();

    currentPageNumber = 1;

    private courseId:number;

    constructor(private http:Http) {

    }

    loadFirstPage(courseId: number) {
        this.courseId = courseId;
        this.currentPageNumber = 1;
        this.loadPage(this.currentPageNumber);
    }

    loadNextPage() {
        this.currentPageNumber += 1;
        this.loadPage(this.currentPageNumber);
    }

    loadPreviousPage() {
        if (this.currentPageNumber - 1 > 1) {
            this.currentPageNumber -= 1;
            this.loadPage(this.currentPageNumber);
        }
    }

    loadPage(pageNumber:number) {

        this.currentPageNumber = pageNumber;

        this.http.get('/api/lessons',
            {
                params: {
                    courseId: this.courseId,
                    pageNumber:1,
                    pageSize: LessonsPager.PAGE_SIZE
                }
            })
            .map(res => res.json().payload)
            .subscribe(
                lessons => this.subject.next(lessons)
            );
    }

}
